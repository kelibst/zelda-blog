const initState = {
  posts: [
            { id: "1", title: "Testing Deepin OS", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, neque.Accusantium beatae, laudantium quo enim quibusdam quas fugiat veniam officia,obcaecati, exercitationem necessitatibus recusandae laboriosam? Nostrum laboresaepe debitis deleniti laborum dolorum officia quibusdam, dolore non nam veroasperiores exercitationem." },
            { id: "2", title: "The Elegance of Deepin Os", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, neque.Accusantium beatae, laudantium quo enim quibusdam quas fugiat veniam officia,obcaecati, exercitationem necessitatibus recusandae laboriosam? Nostrum laboresaepe debitis deleniti laborum dolorum officia quibusdam, dolore non nam veroasperiores exercitationem." },
            { id: "3", title: "The Stability of Manjaro Linux", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, neque.Accusantium beatae, laudantium quo enim quibusdam quas fugiat veniam officia,obcaecati, exercitationem necessitatibus recusandae laboriosam? Nostrum laboresaepe debitis deleniti laborum dolorum officia quibusdam, dolore non nam veroasperiores exercitationem." },
            { id: "4", title: "Deepin vs Manjaro which to choose", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, neque.Accusantium beatae, laudantium quo enim quibusdam quas fugiat veniam officia,obcaecati, exercitationem necessitatibus recusandae laboriosam? Nostrum laboresaepe debitis deleniti laborum dolorum officia quibusdam, dolore non nam veroasperiores exercitationem." }       
        ],
};

const rootReducer = (state = initState, action) => {
   if(action.type === 'DELETE_POST'){
       let nPosts = state.posts.filter(post => {
           return action.id !== post.id
       })
       return {
           ...state,
           posts: nPosts
       }
   }
  return state;
};

export default rootReducer;
