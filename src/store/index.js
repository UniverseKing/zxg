import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义保存数据的对象
    userinfo:{}
  },
  mutations: {
    // 定义用于更新数据的方法
    setUserInfo(state,user){
      localStorage.setItem('userinfo',JSON.stringify(user))
      state.userinfo = user
    }
  },
  actions: {
  },
  modules: {
  }
})
