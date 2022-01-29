<template>
  <div class="chooseUser">
    <h1>请选择你聊天的角色</h1>
    <div class="list">
      <div
        class="item"
        @click="chooseEvent(item)"
        v-for="(item, index) in userlist"
        :key="index"
      >
        <img :src="item.headerimg" alt="" />
        <span>{{ item.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "../js/socket";
import { getUserInfo } from "../../../api/getData";
import axios from "axios";
export default {
  data() {
    return {
      // 用户自己信息
      userinfo: "",
      mehead_img:'',
      mename:'',



      userlist: [],
      islogin: false,
      users: [],
      ischat: false,
      touser: null,
      //   2
      unreadlist: [],
      // 最新消息
      newsMsg: null,
    };
  },
  methods: {
    chooseEvent(user) {
      this.$root.me = user;
      localStorage.chatme = JSON.stringify(user);
      socket.emit("login", user);
      setTimeout(() => {
        this.$router.push({
          path: "/userlist",
          query: {
            islogin: this.islogin,
            users: this.users,
            unreadlist: this.unreadlist,
          },
        });
        //   console.log(this.islogin,this.users,this.unreadlist);
      }, 500);
    },
  },
  computed: {
    usersObj() {
      let obj = {};
      this.users.forEach((item) => {
        obj[item.username] = item;
      });
      console.log(obj);
      return obj;
    },
  },
  mounted() {
    // 监听登录成功设置为true
    socket.on("login", (data) => {
      if (data.state == "ok") {
        this.islogin = true;
        socket.emit("users");
        console.log("登录成功", this.islogin);
      } else {
        console.log("登录失败");
      }
    });
    // 监听登出事件
    socket.on("logout", (data) => {
      console.log(data);
      this.islogin = false;
      // 断开连接
      alert(data.content);
      this.$router.push({ path: "/socket" });
      socket.disconnect();
    });
    // 监听断开连接事件
    socket.on("disconnect", () => {
      console.log("断开连接");
    });
    // 监听
    socket.on("users", (data) => {
      //   console.log(data);
      this.users = data;
      //   console.log(this.users);
    });
    // 2
    socket.on("unreadMsg", (data) => {
      console.log(data);
      // data.forEach((item,index)=>{
      data.forEach((item) => {
        // 设置未读的红点
        // 将聊天的内容分添加到本地的存储
        // 将from/to改成有头像的对象
        item.from = this.usersObj[item.fromuser];
        item.to = this.usersObj[item.touser];
        this.unreadlist.push(item.fromuser);

        let strKey =
          "chat-user-" + this.$root.me.username + "-" + item.from.username;
        //  先解析本地存储的数据，再添加
        localStorage[strKey] = localStorage[strKey]
          ? localStorage[strKey]
          : "[]";
        let newArr = JSON.parse(localStorage[strKey]);
        newArr.push(item);
        localStorage[strKey] = JSON.stringify(newArr);
        // console.log(this.usersObj);
      });
    });
  },
  async beforeMount() {
    await axios.get("http://192.168.123.127:3000/api/userlist").then((res) => {
      this.userlist = res.data;
      console.log(this.userlist);
    });

    this.userinfo = await getUserInfo(this.$store.state.token);
    console.log(this.userinfo.data.data);
    var result = this.userinfo.data.data;
    this.mehead_img =result.head_img
    this.mename=result.name
    var _this=this
     await axios.get("http://192.168.123.127:3000/api/me", {
       params:{
          mehead_img: _this.mehead_img,
        mename:_this.mename
       }  
       
      }).then((res) => {
        console.log(this.res);
    });
    
  },
};
</script>

<style scoped>
.chooseUser h1 {
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
}
.chooseUser {
  width: 100vw;
  height: 100vh;
  background: rgb(124, 223, 124);
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 130px;
  margin: 15px 0;
}
.item img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>