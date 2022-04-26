import {API} from '../const'

export default {
    namespaced: true,
    actions: {
      fetchAllComments ({ commit }, post)  {
        let url = API + '/posts/' + post.post + '/comments';
        fetch(url)
          .then(result => result.json())
            .then(result => {commit('updateComments', result)})
          .catch(error => { console.log(error) })
      }
    },
    mutations: {
      updateComments (state, comments) {
        state.comments = comments
      }
    },
    state: { 
        comments: []
    },
    getters: {
      users (state) {
        return state.comments
      }
    }
  }