import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Home",

     component : ()=>import("../views/Home/Home.vue")
  },
  {
    path:"/coursedetail",
    name:"CourseDetail",
    //按需加载
    component : ()=>import("../views/CourseDetail/CourseDetail.vue")

  },
  {
    path:"/login",
    name:"Login",

     //按需加载
     component : ()=>import("../views/Login/Login.vue")
    
  },{
    path:"/pay",
    name:"Pay",

     //按需加载
     component : ()=>import("../views/Pay/Pay.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/personal",
    name:"Personal",

     //按需加载
     component : ()=>import("../views/Personal/Personal.vue")
    // meta:{ requiresAuth : true}

  },{
    path:"/touxiang",
    name:"Touxiang",
     //按需加载
     component : ()=>import("../views/Touxiang/Touxiang.vue"),
    // component:Touxiang
  },{
    path:"/register",
    name:"Register",
     //按需加载
     component : ()=>import("../views/Register/Register.vue"),
    // component:Register
  },{
    path:"/data",
    name:"Data",

     //按需加载
     component : ()=>import("../views/Data/Data.vue"),
     meta:{ requiresAuth : true}
  },{
    path:"/match",
    name:"Match",

     //按需加载
     component : ()=>import("../views/Match/Match.vue"),
    //  meta:{ requiresAuth : true}
  },{
    path:"/photoma",
    name:"Photoma",

     //按需加载
     component : ()=>import("../views/Photoma/Photoma.vue")
  },{
    path:"/xiangqin",
    name:"Xiangqin",

     //按需加载
     component : ()=>import("../views/Xiangqin/Xiangqin.vue")
  },{
    path:"/capatch",
    name:"Capatch",

     //按需加载
     component : ()=>import("../views/Capatch/Capatch.vue")
  },{
    path:"/teachvideo",
    name:"Teachvideo",

     //按需加载
     component : ()=>import("../views/Teachvideo/Teachvideo.vue")
  },{
    path:"/dati",
    name:"Dati",

     //按需加载
     component : ()=>import("../views/Dati/Dati.vue"),
     meta:{ requiresAuth : true}
  },{
    path:"/score",
    name:"Score",
     //按需加载
     component : ()=>import("../views/Score/Score.vue")
  },{
    path:"/orderlist",
    name:"OrderList",
     //按需加载
     component : ()=>import("../views/OrdeList/OrderList.vue")
  },{
    path:"/speak",
    name:"Speak",
     //按需加载
     component : ()=>import("../views/Speak/Speak.vue")
  },{
    path:"/shimin",
    name:"Shimin",
     //按需加载
     component : ()=>import("../views/Shimin/Shimin.vue")
  },{
    path:"/video",
    name:"Video",
     //按需加载
     component : ()=>import("../views/Video/Video.vue")
  },{
    path:"/showmap",
    name:"ShowMap",
    component:()=>import("../views/MapShow/MapShow.vue")
  },{
    path:"/shouhou",
    name:"ShouHou",
    component:()=>import("../views/shouhou/shouhou.vue")
    
  },{
    path:"/teach",
    name:"Teach",
    component:()=>import("../views/teach/teach.vue")
  },{
    path:"/deibao",
    name:"DeiBao",
    component:()=>import("../views/deibao/deibao.vue"),
    meta:{ requiresAuth : true}
  },{
    path:"/zupin",
    name:"Zupin",
    component:()=>import("../views/Zupin/zupin.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/ihave",
    name:"Ihave",
    component:()=>import("../views/Ihave/ihave.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/ersou",
    name:"ErShou",
    component:()=>import("../views/ErShou/ersou.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/zupincity",
    name:"ZupinCity",
    component:()=>import("../views/zupincity/zupincity.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/search",
    name:"Search",
    component:()=>import("../views/Search/search.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/detail",
    name:"Detail",
    component:()=>import("../views/detail/detail.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/socket",
    name:"Socket",
    component:()=>import("../views/Socket/socket.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/userlist",
    name:"userlist",
    component:()=>import("../views/Socket/components/userList.vue"),
    // meta:{ requiresAuth : true}
  },{
    path:"/chatuser",
    name:"Chatuser",
    component:()=>import("../views/Socket/components/chatUser.vue"),
    // meta:{ requiresAuth : true}
  }
]

const router = new VueRouter({
  routes
})

export default router
