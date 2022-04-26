import { createStore } from 'vuex'
import Posts from './modules/posts'
import Users from './modules/users'


export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Posts,
    Users
  }
})