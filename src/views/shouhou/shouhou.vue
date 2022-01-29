<template>
  <div>
    <!-- 头部 -->
    <home-search>
      <router-link class="header_search" slot="left" to="/personal">
        <i
          class="iconfont icon-jiantou"
          style="font-size: 23px; color: black; color: #6d6868"
        ></i>
      </router-link>
      <div slot="center" style="font-size: 18px">维修信息</div>
    </home-search>
    <div style="margin-top: 55px; width: 100%">
      <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">身份验证</span>
        </div>

        <van-cell-group>
          <van-field
            v-model="value"
            placeholder="请输入身份证号"
            style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
          />
        </van-cell-group>
      </div>
      <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">手机号码</span>
        </div>

        <van-cell-group>
          <van-field
            v-model="value1"
            placeholder="请输入手机号"
            style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
          />
        </van-cell-group>
      </div>
      <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">省市县区</span>
        </div>

        <van-field
          readonly
          clickable
          label=""
          :value="valuee"
          placeholder="请选择"
          @click="showPicker = true"
          style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>
      <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">日期时间</span>
        </div>
        <van-field
          readonly
          clickable
          label=""
          v-model="valueee"
          placeholder="请选择日期时间"
          @click="showPickere = true"
          style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
        />
        <van-popup v-model="showPickere" round position="bottom">
          <van-datetime-picker
            show-toolbar
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel="showPickere = false"
            @confirm="onConfirme"
            style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
          />
        </van-popup>
      </div>
      <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">维修内容</span>
        </div>

        <van-field
          v-model="message"
          rows="2"
          autosize
          label=""
          type="textarea"
          maxlength="50"
          placeholder="请输入多行文本"
          show-word-limit
          style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb"
        />
      </div>
        <div class="first">
        <div style="height: 34px; line-height: 34px">
          <span style="margin-left: -290px">验证码</span>
        </div>

        <van-cell-group>
          <van-field
            v-model="value1"
            placeholder="请输入验证码"
            style="border: 1px solid #d1cbcb; box-shadow: 0px 1px 2px #d1cbcb;width:55%"
          />
          <img class="get_verification" src="http://101.200.155.141:8089//api/v1/pub/captcha" alt="captcha"
                  @click="getCaptcha" ref="captcha" >
        </van-cell-group>

         <button class="login_submit" style="width:70%;float:left;margin-left:60px" @click="tijiao" >提交</button>
         
      </div>
    </div>
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
export default {
  data() {
    return {
         captcha: '', // 图形验证码
      value1: "",
      value: "",
      valuee: "",
      valueee: "",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 8, 25),
      showPicker: false,
      showPickere: false,
      message:"",

      columns: ["太原", "太谷", "北京", "大同", "湖州", "嘉兴", "金华", "衢州"],
    };
  },
  components: {
    HomeSearch,
  },
  methods: {
     
       
      tijiao(){

          alert("提交成功")
          this.$router.replace('/personal')
      },
      // 获取一个新的图片验证码
      getCaptcha () {
        // 每次指定的src要不一样
        this.$refs.captcha.src = 'http://101.200.155.141:8089//api/v1/pub/captcha?time='+Date.now()
      },
    onConfirm(value) {
      this.valuee = value;
      this.showPicker = false;
    },
    onConfirme(value) {
      this.valueee = value;
      console.log(this.valueee);
      var date = new Date(this.valueee);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      const time = y + "-" + m + "-" + d;
      this.valueee = time;
      this.showPickere = false;
    },
  
  },
};
</script>

<style lang="scss" scoped>
.first {
  width: 90%;
//   background-color: #bfa;
  margin: 0 auto;
  margin-bottom: 10px;
}
.get_verification{
     position: absolute;
                top:  50%;
                right:  35px;
                transform: translateY(-50%);
                border : 0;
                color : #ccc;
                font-size:  14px;
    width:30%;
}
.login_submit{
     display: block;
            width :100%;
            height: 42px;
            margin-top :30px;
            border-radius: 4px;
            background: #d9af2b;
            color: #fff;
            text-align: center;
            font-size: 16px;
            line-height: 42px;
            border: 0;
}
</style>