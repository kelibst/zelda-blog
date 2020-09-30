/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePostAction } from '../../actions/postAction'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/zelda-blog')
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="text-center font-weight-bold my-5">{this.props.post.title} </h4>
                <p className="text-secondary">
                    { this.props.post.body }
                    <br/>
                    <br/>
                    <button className="btn btn-danger text-center" onClick={this.handleClick}> Delete Post</button>
                </p>
            </div>
        ) : (
            <div className="text-center">
                <h4 className="text-center font-weight-bold">Loading Post</h4>
                <code className="text-center">{this.props.err}</code>
            </div>
        )
        return (
            <div className="col-sm-8 col-md-6 mx-auto my-5 py-5">
                <h4>{post}</h4>
            </div>
        )
    }
}
const mapProps = (state, ownProps) => {
    let id =  ownProps.match.params.post_id;
    return {
        post: state.posts.find((post)=>{
            return post.id == id;
        })
    }  
}

const mapDisProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePostAction(id))} 
    }
}
export default  connect(mapProps, mapDisProps)(Post)