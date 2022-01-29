<template>
  <section class="loginContainer" style="background-color:transparent;padding-top:270px;text-align: center;">
     <img :src="defaultHeadImg" alt="头像" class="i" />
    <div class="loginInner" style="padding-top:0px;background-color:transparent;">
      <video src="../../assets/5.mp4" class="bjimg" autoplay loop muted style="position: fixed;
      top: 0;
      opacity: 0.9;   
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      object-fit: cover;"></video>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section>
              <section class="login_message" style="background-color:transparent;">
                <div style="float:left;margin-right:10px;margin-top:10px;color:black">用户名</div>
                <input type="text" maxlength="11" placeholder="QQ号" v-model="phone" style="width:70%;height:40px"> 
              </section>
              <section class="login_verification" style="background-color:transparent;"> 
                <div style="float:left;margin-right:24px;margin-top:10px;color:black">密码</div>
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" style="width:70%;height:40px">
                <input type="pwd" maxlength="8" placeholder="密码" v-else v-model="pwd" style="width:70%;height:40px">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd" style="margin-right:5px;margin-top:-3px">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : ' '}}</span>
                </div>
              </section>
              <section class="login_message" style="background-color:transparent;">
                 <div style="float:left;margin-right:10px;margin-top:10px;color:black">验证码</div>
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" style="width:70%;height:40px">
                <img class="get_verification" src="http://101.200.155.141:8089//api/v1/pub/captcha" alt="captcha"
                  @click="getCaptcha" ref="captcha" >
              </section>
             
            </section>
          </div>
          <button class="login_submit" style="width:40%;float:left;">登录</button>
          <router-link to="/register"  class="login_submit" style="width:40%;float:right;">
            <p style="z-index:9999">注册</p>
          </router-link>
          
        </form>
        <a href="javascript:;" class="about_us" style="position:absolute;margin-left:135px;margin-top:90px;">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()" >
        <i class="iconfont icon-jiantou"></i>
      </a>
    </div>

    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip.vue'
  import { loginApi,} from '../../api/getData'
  import defaultHeadImg from "@/assets/touxiang.jpg";
  export default {
    data () {
      return {
        loginWay: true, // true代表短信登陆, false代表密码
        defaultHeadImg:defaultHeadImg,
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        // code:'', // 短信验证码
        captcha: '', // 图形验证码
        pwd: '', // 密码
        
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },

    

    methods: {
      

      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      // 异步登陆
      async login () {
        let result
        // 前台表单验证
        
          const {phone, pwd,captcha} = this
          if(!this.phone) {
            // 用户名必须指定
            this.showAlert('用户名必须指定')
            return
          } else if(!this.pwd) {
            // 密码必须指定
            this.showAlert('密码必须指定')
            return
          } 
           else if(!this.captcha) {
            // 密码必须指定
            this.showAlert('验证码必须指定')
            return
          } 
          // 发送ajax请求密码登陆
          result = await loginApi(phone, pwd,captcha)
          console.log(captcha);
        // 根据结果数据处理
        if(result.data.code===0) {
          localStorage.setItem("token", result.data.data);
          // console.log(result.data.data);
          //利用vuex进行存储
          this.$store.dispatch('setToken',result.data.data)
          // 去个人中心界面
          this.$router.replace('/personal')
        } else {
          // 显示新的图片验证码
          this.getCaptcha()
          // 显示警告提示
         
          this.showAlert('登录失败')
        }
      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      // 获取一个新的图片验证码
      getCaptcha () {
        // 每次指定的src要不一样
        this.$refs.captcha.src = 'http://101.200.155.141:8089//api/v1/pub/captcha?time='+Date.now()
      }
      
    },

    components: {
      AlertTip
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../stylus/mixins.styl"
  body{
    height 400px
    overflow hidden
  }
   .i {
        top: 120px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-top: -200px;
    margin-bottom 40px
    position: static;
      }
  .loginContainer
     
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 40%
                right 35px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 34px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #d9af2b
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 40px
          text-align center
          color #999
      .go_back
        position absolute
        left 15px
        top 15px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>