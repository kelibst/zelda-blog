import Axios from 'axios'
import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
        
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="text-center font-weight-bold my-5">{this.state.post.title} </h4>
                <p className="text-secondary">
                    { this.state.post.body }
                </p>
            </div>
        ) : (
            <div className="text-center">
                <h4 className="text-center font-weight-bold">Loading Post</h4>
            </div>
        )
        return (
            <div className="col-sm-8 col-md-6 mx-auto my-5 py-5">
                <h4>{post}</h4>
            </div>
        )
    }
}
