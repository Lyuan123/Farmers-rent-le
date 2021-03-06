import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cube from 'cube-ui'
import Vant from 'vant';
import './mock/mock'
import 'vant/lib/index.css';
import Mui from 'vue-awesome-mui';

Vue.use(Mui);



Vue.use(Vant);

Vue.use(Cube)

Vue.config.productionTip = false
//路由拦截，拦截全部路由，每次操作路由都是被拦截进行判断
router.beforeEach((to,from,next)=>{
  const token=localStorage.getItem("token");
  //筛选需要传token的路由，匹配route里面需要登录的路径，如果匹配到就是true
  if(to.matched.some(record => record.meta.requiresAuth)){
    //根据token是否有，判断是否需要跳转到登录页面
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next();
  }

})

new Vue({
  data:{
    me:null
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
