import {API} from '../const'

export default {
    namespaced: true,
    actions: {
      fetchAllPosts ({ commit })  {
        fetch(`${API}/posts`)
          .then(result => result.json())
            .then(result => {commit('updatePosts', result)})
          .catch(error => { console.log(error) })
      }
    },
    mutations: {
      updatePosts (state, posts) {
          state.posts = posts
        },
      sortAz (state) {
        let newPosts = state.posts;
        newPosts.sort(function(a, b){
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
          if (nameA < nameB) 
            return -1
          if (nameA > nameB)
            return 1
          return 0 
        })
        state.posts = newPosts;
      },
      sortZa (state) {
        let newPosts = state.posts;
        newPosts.sort(function(a, b){
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
          if (nameA < nameB) 
            return 1
          if (nameA > nameB)
            return -1
          return 0 
        })
        state.posts = newPosts;
      }
    },
    state: { 
        posts:[
         
        ]
    },
    getters: {
      posts (state) {
        return state.posts
      }
    }
  }