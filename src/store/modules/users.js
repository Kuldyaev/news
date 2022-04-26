import {API} from '../const'

export default {
    namespaced: true,
    actions: {
      fetchAllUsers ({ commit })  {
        fetch(`${API}/users`)
          .then(result => result.json())
            .then(result => {commit('updateUsers', result)})
          .catch(error => { console.log(error) })
      }
    },
    mutations: {
      updateUsers (state, users) {
        state.users = users
      }
    },
    state: { 
        users: []
    },
    getters: {
      users (state) {
        return state.users
      }
    }
  }