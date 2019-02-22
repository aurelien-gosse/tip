import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //IP: "http://localhost:52440",
    IP: "//team5api.azurewebsites.net",
    userId: "",
    userName: "",
    userStore: []
  }
})