import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userName: '',
    passWord: ''
  },
  getters: {
    //这里输出的时候可以给参数做过滤或其他处理
    getUserName (state) {
      return state.userName
    },
    getPassWord(state) {
      return state.passWord
    },
  },
  mutations: {
    // this.$store.commit('setUserName','')外部这样就可以执行getting函数，有缺点异步操作的时候不能及时更新数据解决办法就是用action触发
    //这里触发时参数传入时做参数处理和过滤后传入state里面存起来。
    setUserName (state, userName) {
      state.userName = userName
    },
    setPassWord (state, passWord) {
      state.passWord = passWord
    }
  },
  actions: {
    // this.$store.dispatch('setUserName','')触发，{commit}指向当前对象
    setUserName ({commit},userName) {
      commit('setUserName',userName)
    },
    setPassWord ({commit},passWord) {
      commit('setPassWord',passWord)
    }
  }
})