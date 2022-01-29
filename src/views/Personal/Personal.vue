<template>
  <div class="aaa" style="width: 100%; height: 100%; background-color: #e9eeee">
    <div class="container">
      <div class="p_top">
        <div class="toubushiy">
          <!-- <router-link to="/socket"> -->
          <div @click="choosechat()" style="display: block">
            <i class="iconfont icon-weibiaoti--"></i>
          </div>
        </div>
        <div class="me">我的</div>
        <div style="display: block">
          <router-link to="/touxiang">
            <div>
              <i class="iconfont icon-shezhi"></i></div
          ></router-link>
        </div>

        <!-- </router-link> -->

        <div class="phone">
          <img :src="info.head_img || defaultHeadImg" alt="头像" class="i" />

          <router-link to="/login" v-if="getToken === ''">
            <p>立刻登录</p>
          </router-link>
          <p v-else>{{ info.name }}</p>
        </div>
        <div class="guanzhu">
          <div class="ziti">
            <h1>13&nbsp;关注&nbsp;&nbsp;</h1>
          </div>
          <div class="ziti">
            <h1>&nbsp;&nbsp;14粉丝&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          </div>
          <div class="ziti"><h1>&nbsp;&nbsp;168&nbsp;精选动态</h1></div>
        </div>
      </div>
    </div>
    <div
      class="tubiao"
      style="height: 65px; width: 100%; position: relitive; display: flex"
    >
      <div
        class="a"
        style="width: 25%; height: 65px; position: relitive; diplay: block"
      >
        <a href="#">
          <span>
            <i
              class="iconfont icon-xiazai"
              style="
                font-size: 30px;
                color: #32bbf1;
                position: absolute;
                left: 45px;
                margin-top: 8px;
              "
            ></i>
            <div
              style="
                font-size: 12px;
                position: absolute;
                left: 35px;
                margin-top: 45px;
              "
            >
              离线缓存
            </div>
          </span>
        </a>
      </div>
      <div
        class="a"
        style="width: 25%; height: 65px; position: relitive; diplay: block"
      >
        <a href="#">
          <span>
            <i
              class="iconfont icon-icon-"
              style="
                font-size: 35px;
                color: #32bbf1;
                position: absolute;
                margin-top: 8px;
                top: 260px;
                left: 135px;
              "
            ></i>
            <div
              style="
                font-size: 12px;
                position: absolute;

                margin-top: 45px;
                top: 260px;
                left: 138px;
              "
            >
              购物车
            </div>
          </span>
        </a>
      </div>
      <div
        class="a"
        style="width: 25%; height: 65px; position: relitive; diplay: block"
      >
        <a href="#">
          <span>
            <i
              class="iconfont icon-jifenshangcheng"
              style="
                font-size: 30px;
                color: #32bbf1;
                position: absolute;
                margin-top: 8px;
                top: 260px;
                left: 225px;
              "
            ></i>
            <div
              style="
                font-size: 12px;
                position: absolute;
                left: 25px;
                margin-top: 45px;
                top: 260px;
                left: 215px;
              "
            >
              积分商城
            </div>
          </span>
        </a>
      </div>
      <div
        class="a"
        style="width: 25%; height: 65px; position: relitive; diplay: block"
      >
        <router-link to="/orderlist">
          <span>
            <i
              class="iconfont icon-dingdan"
              style="
                font-size: 30px;
                color: #32bbf1;
                position: absolute;
                margin-top: 8px;
                top: 260px;
                left: 320px;
              "
            ></i>
            <div
              style="
                font-size: 12px;
                position: absolute;
                left: 25px;
                margin-top: 45px;
                top: 260px;
                left: 310px;
              "
            >
              订单列表
            </div>
          </span>
        </router-link>
      </div>
    </div>
    <div class="mulu">
      <div class="first">
        <router-link
          style="
            width: 100%;
            float: right;
            border-bottom: 1px solid #9fa0a1;
            background-color: #fff;
            color: #2c3e50;
          "
          to="/shimin"
        >
          <a
            href="#"
            style="
              float: left;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
              width: 11.1%;
            "
          >
            <span>
              <i
                class="iconfont icon-cedaohang-kehuguanli"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
          <span style="float: left; margin-left: 15px">实名认证</span>
          <a
            href="#"
            style="
              float: right;
              margin-left: 1px;
              right: 10px;
              display: block;
              height: 60px;
            "
          >
            <span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
        </router-link>
      </div>
      <div class="first">
        <div
          style="
            width: 100%;
            float: right;
            border-bottom: 1px solid #9fa0a1;
            background-color: #fff;
          "
        >
          <a
            href="#"
            style="
              float: left;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
              width: 11.1%;
            "
          >
            <span>
              <i
                class="iconfont icon-jifenshangcheng"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
          <span style="float: left; margin-left: 15px">积分商城</span>
          <a
            href="#"
            style="
              float: right;
              margin-left: 1px;
              right: 10px;
              display: block;
              height: 60px;
            "
          >
            <span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
        </div>
      </div>
      <div class="first">
        <router-link
          style="
            width: 100%;
            float: right;
            border-bottom: 1px solid #9fa0a1;
            background-color: #fff;
            color: #2c3e50;
          "
          to="/shouhou"
        >
          <a
            href="#"
            style="
              float: left;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
              width: 11.1%;
            "
          >
            <span>
              <i
                class="iconfont icon-shoucang1"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
          <span style="float: left; margin-left: 15px">售后服务</span>
          <a
            href="#"
            style="
              float: right;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
            "
          >
            <span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
        </router-link>
      </div>
      <div class="first">
        <div
          style="
            width: 100%;
            float: right;
            border-bottom: 1px solid #9fa0a1;
            background-color: #fff;
          "
        >
          <a
            href="#"
            style="
              float: left;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
              width: 11.1%;
            "
          >
            <span>
              <i
                class="iconfont icon-liulanlishi"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
          <span style="float: left; margin-left: 15px">浏览历史</span>
          <a
            href="#"
            style="
              float: right;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
            "
          >
            <span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
        </div>
      </div>
      <div class="first">
        <div style="width: 100%; float: right; background-color: #fff">
          <a
            href="#"
            style="
              float: left;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 64px;
              width: 11.1%;
            "
          >
            <span>
              <i
                class="iconfont icon-chuangzuo"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
          <span style="float: left; margin-left: 15px">创作中心</span>
          <a
            href="#"
            style="
              float: right;
              margin-left: 1px;
              right: 10px;
              display: block;
              background-color: #fff;
              height: 60px;
            "
          >
            <span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="margin-left: 10px; margin-right: 10px"
              ></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <cube-button v-if="getToken !== ''" class="green" @click="signOut">
      退出登录
    </cube-button>
    <div
      style="width: 100%; height: 20px; background-color: red; margin-top: 50px"
    ></div>

    <common-footer></common-footer>
  </div>
</template>

<script>
// 1
import socket from "../Socket/js/socket";
import axios from "axios";

import CommonFooter from "@/components/CommonFooter";
import { getUserInfo } from "@/api/getData.js";
import defaultHeadImg from "@/assets/touxiang.jpg";

export default {
  name: "person",
  components: {
    CommonFooter,
  },

  data() {
    return {
      info: {},
      defaultHeadImg: defaultHeadImg,

      // 2
      // 用户自己信息
      userinfo: {},
      mehead_img: "",
      mename: "",

      userlist: [],
      islogin: false,

      ischat: false,
      touser: null,
      unreadlist: [],
    };
  },
  // 2

  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },
  mounted() {
    // if (this.getToken) {
    //   this.getInfo();
    // }
    // var _this=this
    this.creat();
    // 监听登录成功设置为true
    socket.on("login", (data) => {
      if (data.state == "ok") {
        this.islogin = true;
        console.log("登录成功", this.islogin);
      } else {
        console.log("登录失败");
      }
    });
    // 重新查询users的用户列表用于更新状态
    socket.on("users", (data) => {
      console.log(data);
      this.users = data;
      // console.log(this.users);
    });
  },

  methods: {
    //是否新增用户
    async creat() {
      //获取用户信息

      const result = await getUserInfo(this.getToken);
      console.log(result);
      if (result.data.code === 0) {
        this.info = result.data.data;
        this.userinfo = result.data.data;

        this.mehead_img = result.data.data.head_img;
        this.mename = result.data.data.name;
        console.log(this.userinfo, this.mehead_img, this.mename);
        //  location.reload();
      }

      var _this = this;
      await axios.all([
        axios.get("http://192.168.123.127:3000/api/me", {
          params: {
            mehead_img: this.mehead_img,
            mename: this.mename,
          },
        }),
        axios
          .get("http://192.168.123.127:3000/api/userlist", {
            params: {
              mename: _this.mename,
            },
          })
          .then((res) => {
            this.userlist = res.data;
            // callback(this.mehead_img,this.mename);
            console.log(this.userlist);
          }),
      ]);
    },
    //退出登录
    async signOut() {
      this.$createDialog({
        type: "confirm",

        title: "确认退出吗?",

        confirmBtn: {
          text: "确定按钮",
          active: true,
          disabled: false,
          href: "javascript:;",
        },
        cancelBtn: {
          text: "取消按钮",
          active: false,
          disabled: false,
          href: "javascript:;",
        },
        onConfirm: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "退出成功",
          }).show(
            this.$store.dispatch("clearToken"),
            localStorage.removeItem("token"),
            location.reload()
          );
        },
      }).show();
      //清除token
      // await this.$store.dispatch("clearToken");
      // localStorage.removeItem("token");

      // //刷新页面
      // location.reload();
    },
    choosechat() {
      this.$root.me = this.userlist[0];
      console.log(this.$root.me);
      localStorage.chatme = JSON.stringify(this.userlist[0]);
      socket.emit("login", this.userlist[0]);
      console.log(this.islogin, this.users, this.unreadlist);
      setTimeout(() => {
        this.$router.push({
          path: "/userlist",
          query: { users: this.users },
        });
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.toubushiy {
  width: 95%;
  background: #d9af2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.me{
  color: #e4e1d8;
  font-size: 18px;
  font-weight: 700;
}
.i {
  top: 120px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 40px;
  position: static;
}
.phone {
  text-align: center;
  // margin-left:-12px;
  // align-items: center;
  // overflow: hidden;
  height: 100px;
  width: 100%;
}

.container {
  // 顶部头像区域
  .p_top {
    // position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    // background-color: #8c8d8f;
    background-image: url(../../assets/hiker-1149898_1920.jpg);
    background-size: cover;
    height: 220px;
    div {
      text-align: center;

      p {
        font-size: 16px;
        color: #fff;
        margin-top: 25px;
        text-align: center;
        margin: 30px auto;
        height: 100px;
      }
    }
  }
}
.icon-shezhi {
  color: #fff;
  position: absolute;
  font-size: 20px;
  left: 360px;
  top: 23px;
}
.icon-weibiaoti-- {
  color: #fff;
  position: absolute;
  font-size: 21px;
  right: 360px;
  // top:15px
}
.guanzhu {
  display: flex;
  // background-color: #4e524e;
  width: 100%;
  line-height: 30px;
  float: left;
  // display: inline;
  position: absolute;
  left: -1px;
  top: 220px;
}
.ziti {
  float: left;
  margin-left: 50px;
  margin-top: 10px;
}
h1 {
  color: #fff;
}
// 退出登录
.green {
  float: left;
  background-color: #d9af2b;
  border: none;
  outline: none;
  width: 90%;
  height: 40px;
  position: absolute;
  left: 20px;
  top: 645px;
  margin-top: 25px;
  // margin-bottom: 300px;

  color: #fff;
  border-radius: 10px;
}
.mulu {
  width: 100%;
  background-color: #e9eeee;
  line-height: 60px;
  height: 400px;
}
.tubiao {
  background-color: #fff;
}
</style>