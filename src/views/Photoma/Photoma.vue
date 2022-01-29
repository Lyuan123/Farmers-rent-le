<template>
  <div class="body-bg">
    <header-search>
      <div class="header_search" slot="left" @click="$router.back(-1)">
        <i
          class="iconfont icon-jiantou"
          style="margin-left: -7px; display: block; font-size: 23px"
        ></i>
      </div>
      <div slot="center">我的二维码</div>
    </header-search>
    <div class="bigbox">
      <div class="litterbox">
        <div class="biglitter">
      <div class="div_box">
        <div class="username">
          <div class="touxiang">
            <img
                  :src="info.head_img"
                  alt="头像"
                  style="width: 100%; height: 100%"
                />
               
          </div>
          <div class="usern">{{info.name}} </div>
          
        </div>
        <div class="erweima">
        <div id="qrCode" ref="qrCodeDiv" class="qr_code"></div></div>
        <div class="text">扫一扫上面的二维码可以加我好友哦</div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import HeaderSearch from "../../components/Search";
import { getUserInfo } from "@/api/getData.js";
export default {
  name: "qrCode",
  components: {
    HeaderSearch,
  },
  data() {
    return {
      info: {},
      files: [],

    };
  },
    computed: {
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
          //  location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    addedHandler() {
      const file = this.files[0];
      file && this.$refs.upload.removeFile(file);
      // location.reload();
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: "warn",
        txt: "Upload fail",
        time: 1000,
      }).show();
    },
    bindQRCode: function () {
      //验证码
      let url = location.href; //获取当前地址栏的地址
      console.log(url);

      new QRCode(this.$refs.qrCodeDiv, {
        text: "你好呀asd",

        width: 200,
        height: 200,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
      });
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.bindQRCode();
    });
     if (this.getToken) {
      this.getInfo();
    }
  },
};
</script>

<style lang="scss" scoped>
 .body-bg{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
    background-color: #f8f6f6;//背景色为白色
  }
.text{
  margin-top: 35px;
  font-size: 13px;
  color:#e0dfdf;
}
.usern{
  margin-left:16px;
  margin-top: 20px;
  // background-color: #bfa;
  float: left;
}
.touxiang{
  width: 21%;
  height: 60px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  // background-color: #bfa;
  overflow: hidden;
  float: left;
}
.erweima{
  width: 100%;
  height: 200px;
  margin-top: 15px;
}
.username{
  width: 100%;
  height: 80px;
  margin-top: 20px;
  // margin-left: 20px;
  display: inline-block;
  // background-color: red;
}
.biglitter{
  width: 94%;
  height: 400px;
  // background-color: rgb(66, 214, 29);
  margin: 0px auto;
  border-radius: 1%;
  // display: block;

}
.litterbox{
 width: 90%;
  height: 400px;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 1%;
  display: block;

}
.bigbox{
  background-color:#f8f6f6;
  width: 90%;
  height: 400px;
  // background-color: #bfa;
  margin-top: 180px;
  margin-left: 20px;
  border-radius: 1%;
  text-align: center;
}
.div_box {
  width: 300px;
  height: 300px;
  // margin: 155px auto;
}
.qr_code {
  width: 200px;
  height: 200px;
  margin-top: 45px;
  margin: 0 auto;
}
</style>