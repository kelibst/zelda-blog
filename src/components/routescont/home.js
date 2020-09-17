import Axios from 'axios'
import React, { Component } from 'react'

export default class home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
          console.log(res)
          this.setState({
            posts: res.data.slice(0,10)
          })
        })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
     posts.map(post => {
       return(
         <div className="col-sm-6 col-md-4" key={post.id}>
                  
          <div className="card card-cascade wider border-0">

            
            <div className="view view-cascade gradient-card-header peach-gradient">

              
              <h2 className="card-header-title mb-3">{post.title}</h2>
            
              <p className="mb-0"><i className="fas fa-calendar mr-2"></i>{post.userId}</p>

            </div>


          <div className="card-body card-body-cascade text-center">

            {/*<!-- Text -->*/}  
            <p className="card-text">{post.body}</p>
            {/*<!-- Link -->*/}  
            <a href="#!" className="orange-text d-flex flex-row-reverse p-2">
              <h5 className="waves-effect waves-light">Read more<i className="fas fa-angle-double-right ml-2"></i></h5>
            </a>

          </div>
          {/*<!-- Card content -->*/}

        </div>
        {/*Card*/}  

          
         </div>
       )
     })
    ) : ( 
      <div className="mx-auto text-center">
          <p className="text-center">Post not Loaded</p>
      </div>
    )
    return (
      <div className="container raised">
      <h1 className="text-center display-5 pt-5 font-weight-bolder text-dark">
        Welcome to the Zelda Home page
      </h1>
      <div className="row my-6 py-6">
        {postList}
      </div>
      
    </div>
    )
  }
}
