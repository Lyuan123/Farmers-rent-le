<template>
  <div style="background-color: #f9faf9">
    <header-search>
      <div class="header_search" slot="left" @click="$router.back(-1)">
        <i
          class="iconfont icon-jiantou"
          style="margin-left: -7px; display: block; font-size: 23px"
        ></i>
      </div>
      <div slot="center">个人信息</div>
    </header-search>
    <!-- 头像 -->
    <cube-upload
      ref="upload"
      v-model="files"
      :action="action"
      @files-added="addedHandler"
      @file-error="errHandler"
      class="tou"
    >
      <div class="clear-fix">
        <cube-upload-file
          v-for="(file, i) in files"
          :file="file"
          :key="i"
          style="display:none"
        ></cube-upload-file>
        <cube-upload-btn :multiple="false">
          <div class="bigbox" style="margin-top: 0px">
            <div class="touxiang">
              <span class="t">头像</span>
              <i
                class="iconfont icon-arrow-right-copy-copy"
                style="font-size: 20px; margin-top: 30px"
              ></i>
              <div class="toux" style="position: relative">
                <img
                  :src="info.head_img || defaultHeadImg"
                  alt="头像"
                  style="width: 100%; height: 100%;"
                />
              </div>
            </div>
          </div>
        </cube-upload-btn>
      </div>
    </cube-upload>
    <!-- 昵称 -->
    <div class="bigonebox">
      <div class="name">
        <span class="tt" style="margin-top:18px">昵称</span>
        <i
          class="iconfont icon-arrow-right-copy-copy"
          style="font-size: 20px;margin-top:15px"
        ></i>
        <div class="nameone" style="position: relative">
          <p class="namesecond" style="margin-top: -11px;">{{ info.name }}</p>
        </div>
      </div>
    </div>
    <!-- 个性签名 -->
    <div class="bigonebox">
      <div class="name">
        <span class="tt">个性签名</span>
        <i
          class="iconfont icon-arrow-right-copy-copy"
          style="font-size: 20px"
        ></i>
        <div class="nameone" style="position: relative">
          <p class="namesecond">{{info.tell}}</p>
        </div>
      </div>
    </div>
    <!-- 性别 -->
    <div class="bigonebox">
      <div class="name">
        <span class="tt">手机号</span>
        <i
          class="iconfont icon-arrow-right-copy-copy"
          style="font-size: 20px"
        ></i>
        <div class="nameone" style="position: relative">
          <p class="namesecond">{{info.phone }}</p>
        </div>
      </div>
    </div>
    <!-- 我的二维码 -->

    <div class="bigonebox">
      <router-link to="/photoma">
        <div class="name">
          <span class="tt">我的二维码</span>
          <i
            class="iconfont icon-arrow-right-copy-copy"
            style="font-size: 20px"
          ></i>
          <i
            class="iconfont icon-erweima"
            style="width: 20px; height: 10px"
          ></i>
          <div style="position: relative"></div></div
      ></router-link>
    </div>
     <!-- 更多 -->
    <div class="bigonebox" style="height: 52px">
      <div class="name">
        <span class="tt">我的积分</span>
        <i
          class="iconfont icon-arrow-right-copy-copy"
          style="font-size: 20px"
        ></i>
        <div class="nameone" style="position: relative">
          <p class="namesecond" style="margin-top:-18px">{{ info.score }}</p>
        </div>
      </div>
    </div>
    <!-- 更多 -->
    <div class="bigonebox" style="height: 52px">
      <div class="name">
        <span class="tt" style="margin-top:19px">更多</span>
        <i
          class="iconfont icon-arrow-right-copy-copy"
          style="font-size: 20px;margin-top:15px"
        ></i>
        <div class="nameone" style="position: relative">
       
        </div>
      </div>
    </div>
    <!-- 我的地址 -->
    <div class="bigtwo">
      <div class="bigtwobox" style="width: 100%; margin-top: 10px">
        <span class="bigtwobox">
          <span class="host">我的地址</span>
          <i
            class="iconfont icon-arrow-right-copy-copy"
            style="font-size: 20px;margin-top:15px"
          ></i>
          <div class="nameone" style="position: relative">
            <p class="namesecond"></p>
          </div>
        </span>
      </div>
    </div>
     
  </div>
</template>

<script>

import HeaderSearch from "../../components/Search";
import { mapState } from "vuex";
import axios from "axios";
import { getUserInfo } from "@/api/getData.js";
import defaultHeadImg from "@/assets/touxiang.jpg";
export default {
  name: "qrCode",
  components: {
    HeaderSearch,
  
  },
  data() {
    return {
     
      info: {},
      defaultHeadImg: defaultHeadImg,
      action: {
        target: "http://101.200.155.141:8089/api/v1/pri/user/user_face",
        headers: {
          token: this.$store.state.token,
        },
      },
      files: [],
    };
  },

  computed: {
    ...mapState(["token"]),
    getToken() {
      return this.$store.state.token;
    },
  },
  methods: {
    
    //获取用户信息
    async getInfo() {
      try {
        const result = await getUserInfo(this.getToken);
        if (result.data.code === 0) {
          this.info = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    addedHandler() {
      const file = this.files[0];
      file && this.$refs.upload.removeFile(file);
       
       this.$createToast({
        type: "success",
        txt: "上传成功",
        time: 1000,
           $events: {
          timeout: () => {
            //  this.$router.replace('/personal')
             location.reload();
          }
        }
        
      }).show();
      
      
    },
   
    
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: "warn",
        txt: "Upload fail",
        time: 1000,
      }).show();
    },
   
  },
  mounted() {
    if (this.getToken) {
      this.getInfo();
      
      
    }
  

  
  },
};
</script>

<style lang="scss" scoped>
.host {
  float: left;
  margin-top: 18px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 1px;
}
.namesecond {
  color: rgb(167, 168, 167);
  font-size: 17px;
  margin-top: -20px;
}
.tou {
  margin-top: 45px;
}
.bigtwobox {
  width: 96%;
  height: 50px;
  float: right;
  border-bottom: 1px solid rgb(235, 233, 233);
  background-color: #fff;
}
.bigtwo {
  width: 100%;
  height: 62px;
  // background-color: #fff;
}
.bigonebox {
  width: 100%;
  height: 65px;
  background-color: #fff;
}
.bigbox {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  background-color: #fff;
}
.nameone {
  display: inline-block;
  float: right;
  // width: 55px;
  height: 25px;
  // background-color: red;
  margin-top: 29px;
  border-radius: 12%;
  // overflow: hidden;
}
.name {
  width: 96%;
  height: 50px;
  float: right;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.touxiang {
  width: 96%;
  height: 80px;
  float: right;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.tt {
  float: left;
  margin-top: 13px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 1px;
  color: black;
  // background-color: #fff;
}
.t {
  float: left;
  margin-top: 35px;
  font-weight: 600;
  font-size: 18px;
  margin-left: 1px;
  color: black;
  // background-color: #fff;
}
.icon-erweima {
  float: right;
  // background-color: #fff;
  margin-top: 10px;
  // color: black;
}
.icon-arrow-right-copy-copy {
  float: right;
  margin-right: 12px;
  margin-top: 9px;
  color: black;
}
.toux {
  display: inline-block;
  float: right;
  width: 65px;
  height: 65px;
  background-color: red;
  margin-top: 7px;
  border-radius: 80%;
  overflow: hidden;
}
</style>