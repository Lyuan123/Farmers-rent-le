import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态
    adress:null,
    token: localStorage.getItem("token") || '',
    
  },
  //同步修改state里面的值
  mutations: { //包含更新多个state函数的对象
    SET_TOKEN:(state, token)=>{
      state.token = token
    },
    getAdress(state,data){
      console.log(state,data);
      state.adress = data
      console.log(state);
    },
    setCity(state, payload) {
      state.adress = payload.data
  },

  },

  //异步调用mutations里面的方法
  //contxt.commit 利用上下文触发mutations某个方法
  // vue代码里面 this.$store.dispatch触发action里面的定义的方法
  actions: { //包含多个对应事件回调函数的对象
    setToken(context,token){
      context.commit('SET_TOKEN',token)
    },

    clearToken(context){
      context.commit('SET_TOKEN','')
    },
    setCityAciton(context, payload) {
      context.commit('setCity', payload)
  },


  },
  // getters包含多个getter计算属性函数的对象
  modules: {
  }
})
