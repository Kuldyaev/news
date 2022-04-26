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