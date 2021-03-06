/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class home extends Component { 
  render() {
    const { posts} = this.props;
    const postList = posts.length ? (
     posts.map(post => {
       return(
         <div className="col-sm-6 my-1 col-md-4" key={post.id}>
                  
          <div className="card card-cascade wider border-0">

            
            <div className="view view-cascade gradient-card-header peach-gradient">

              
              <h2 className="card-header-title mb-3">{post.title}</h2>
            
              <p className="mb-0"><i className="fas fa-calendar mr-2"></i>{post.userId}</p>

            </div>


          <div className="card-body card-body-cascade text-center">

            {/*<!-- Text -->*/}  
            <p className="card-text">{post.body}</p>
            {/*<!-- Link -->*/}  
            <Link to={'/' + post.id} className="orange-text d-flex flex-row-reverse p-2">
              <h5 className="waves-effect waves-light">Read more<i className="fas fa-angle-double-right ml-2"></i></h5>
            </Link>

          </div>
          {/*<!-- Card content -->*/}

        </div>
        {/*Card*/}  

          
         </div>
       )
     })
    ) : ( 
      <div className="mx-auto text-center">
      {/*if the post is not loaded wait for 3 seconds and reload the page */}
          <p className="text-center">Post is Loading...</p>
          <code className="text-center">{err}</code>
      </div>
    )
    return (
      <div className="container raised">
      <h1 className="text-center display-5 pt-5 font-weight-bolder text-dark">
        Welcome to the Zelda Home page
      </h1>
      <div className="row my-5 py-5">
        {postList}
      </div>
      
    </div>
    )
  }
}
const mapProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapProps)(home)