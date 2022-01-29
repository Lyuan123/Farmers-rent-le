<template>
  <div>
       <home-search>
       <div class="header_search" slot="left" @click="$router.back(-1)">
        <i
          class="iconfont icon-jiantou"
          style="margin-left: -7px; display: block; font-size: 23px"
        ></i>
      </div>
       <div slot="center" >实名认证</div>
    </home-search>
<van-cell-group class="asd">
  <van-field v-model="value" label="姓名" placeholder="您本人的真实姓名" />
  <!-- 输入手机号，调起手机号键盘 -->
<van-field v-model="tel" type="tel" label="手机号" placeholder="您的手机号"/>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<van-field  type="number" label="证件号" placeholder="您本人的身份证号码"/>
  <van-radio-group v-model="radio" direction="horizontal" style="margin-top:30px;margin-left:15px">
      <van-radio name="1">同意接受农租乐—乡村振兴实名认证相关协议</van-radio>
    </van-radio-group>
    <!-- <router-link to="/personal"> -->
     <div style="margin: 18px;margin-top:50px">
    <van-button round block type="info" native-type="submit" @click="tijiao">提交</van-button>
  </div>
    <!-- </router-link> -->

    <div style="color:rgb(184, 182, 182)">为了确保用户资金安全，在发起或参与交易之前需要进行实名认证，验证通过“全国公民身份信息系统”完成，农租乐———乡村振兴惠农项目不会向第三方泄露您的任何信息。</div>
</van-cell-group>
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
export default {
 //注册组件
  components: {
    HomeSearch,
     },
     data() {
    return {
      value: '',
       tel: '',
         radio: '0',
    };
  },
  methods:{
    tijiao(){
      const toast = this.$createToast({
            txt: "提交成功",
            type: "correct",
            time: 2000,
            onTimeout: () => {
              this.$router.push({ path: "personal" });
            },
          });
          toast.show();
    }
  }
}
</script>

<style lang="scss" scoped>
   .asd{
       margin-top: 145px;
       color: rgb(184, 182, 182);
   }
</style>