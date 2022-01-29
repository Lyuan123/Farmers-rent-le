<template>
  <div class="city-list-container">
    <h3>热门城市</h3>
    <ul class="clear-fix" @click="getClickCity($event)">
      <li>
        <span>北京</span>
      </li>
      <li>
        <span>山西</span>
      </li>
      <li>
        <span>天津</span>
      </li>

      <li>
        <span>河北</span>
      </li>
      <li>
        <span>内蒙古</span>
      </li>
    </ul>
    <div class="clear-fix">
      <div>
        <h3 style="margin-top: 20px">地图定位城市</h3>
        <ul  v-if="this.cityname !== null" @click="getClickDingwei($event)">
          <li v-if="this.cityname !== null">
            <span>
              {{ this.cityname }}
            </span>
          </li>
          <li v-else style="width:100%">
            <div >
              <i class="iconfont icon-dingwei_" style="font-size:23px;color:black;color:#65bdb5"></i>
              尚未定位城市，请点击此图标定位
            </div>
          </li>
        </ul>
        <ul  v-if="this.cityname == null" @click="getClickMap($event)">
          <li v-if="this.cityname !== null">
            <span>
              {{ this.cityname }}
            </span>
          </li>
          <li v-else style="width:100%">
            <div >
              <i class="iconfont icon-dingwei_" style="font-size:23px;color:black;color:#65bdb5"></i>
              尚未定位城市，请点击此图标定位
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CityHot",
  data() {
    return {
      cityname: this.$store.state.adress,
    };
  },
  methods: {
    getClickCity(e) {
      console.log(e.target.innerHTML);
      this.setCityAciton({
        data: e.target.innerHTML,
      });
      
      window.history.back();
    },
    getClickDingwei(e){
      this.$router.push("/zupin")
    },
    getClickMap(e){
       this.$router.push("/showmap")
    },
    ...mapActions(["setCityAciton"]),
    ...mapState(["adress"]),
  },
};
</script>
<style lang="less" scoped>
.city-list-container {
  background-color: #fff;
  padding: 10px 15px 20px 15px;

  h3 {
    font-size: 16px;
  }

  ul {
    display: block;
    width: 100%;
  }

  li {
    list-style: none;
    display: block;
    float: left;
    width: 33.3%;
    text-align: center;

    span {
      display: inline-block;
      border: 1px solid #ccc;
      font-size: 16px;
      line-height: 2;
      margin-top: 15px;
      width: 90%;
    }
    div {
       display: inline-block;
      font-size: 16px;
      line-height: 2;
      margin-top: 15px;
      width: 90%;
    }

  }

}
</style>