<template>
  <div class="beijing">
    <div class="defen">
      <div class="touxiang">
        <div>
          <img :src="info.head_img" alt="头像" class="i" />
        </div>
        <div class="name">{{info.name}}</div>
        <div class="wenzi" >最终获得积分</div>
        <div class="info">{{info.score}}</div>
        <router-link to="/data">
        <div class="back">
          <div class="pk">返回</div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/getData.js";
export default {
  name:"score",
  data() {
    return {
      info: {},
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
        }
      } catch (error) {
        console.log(error);
      }
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
.pk{
  margin-top: 15px;
    font-weight:800;
    color: rgb(122, 124, 122);
    font-size:17px;
}
.back{
  width: 100px;
  height: 45px;
  background-color: rgb(219, 231, 253);
  border-radius: 180px;
  top: 275px;
  left: 18px;
  position: absolute;
  overflow: hidden;
}
.wenzi{
    margin-top: 50px;
    font-weight:800;
    color: rgb(122, 124, 122);
    font-size:17px;
}
.info{
    margin-top: 10px;
    font-weight:bold;
    font-size:17px;
}
.beijing {
  width: 100%;
  height: 800px;
  background-image: url(../Dati/img/datibeijing.png);
}
.defen {
  width: 100%;
  height: 580px;
  margin: 0 auto;
  display: block;
  padding-top: 220px;
  background-image: url(../Dati/img/defen.png);
  background-size: 100% 100%;
}
.touxiang {
  width: 33.5%;
  height: 300px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.i {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 40px;
  position: static;
}
.name{
    font-weight: bold;
    margin-top: 15px;
}
</style>