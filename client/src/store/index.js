import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:[],
    latestEvents:[],
    tagPosts:[],
    tags:[],
    randPost:[],
    backendHost:`http://127.0.0.1:5000`
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
