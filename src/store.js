import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //IP: "http://localhost:52440",
    IP: "http://172.22.22.40:45455",
    userId: "",
    userName: "",
    userStore: []
  }
})