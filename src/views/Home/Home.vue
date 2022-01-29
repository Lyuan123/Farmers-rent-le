<template>
  <div>
    <home-search>
     
       <router-link class="header_search" slot="left" to="/showmap" v-if="!weizhi">
        <i class="iconfont icon-dingwei_" style="font-size:23px;color:black;color:#6d6868"></i>
        </router-link>
        <router-link class="header_search" slot="left" to="/showmap" v-if="weizhi">
        <div style="width:50px;margin-top:0px;font-size:14px;color:#655c5c">{{weizhi}}</div>
        </router-link>
       <div slot="center" >首页</div>
       <router-link class="xiaoxi" slot="right" to="/speak">
         <i class="iconfont icon-chat" style="font-size:23px;color:black;color:#6d6868;"></i>
       </router-link>
    </home-search>
     <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
    <!-- 轮播图组件 -->
    <home-banner :banners= "banners" ></home-banner>
    <div style="height:15px;"></div>
    <home-dram></home-dram>
    <div style="height:15px;"></div>
    <!-- 地图显示组件 -->
    <!-- <map-show></map-show> -->
    <!-- 热点周边组件 -->
    <video-list :videoList="videoList"></video-list>
    <!-- 底部导航栏组件 -->
    </van-pull-refresh>
    <common-footer></common-footer>
  </div>
</template>


<script>
import HomeSearch from "../../components/Search";
import HomeBanner from "./Component/Banner";
import HomeDram from "./Component/HomeDram";
// import MapShow from './Component/MapShow.vue'
import VideoList from './Component/VideaList';
import CommonFooter from "@/components/CommonFooter";
import { getBanner,getzixun } from "@/api/getData.js";
import { Toast } from "vant";
export default {
  name:'home',
    //声明数据源
  data() {
    return {
      url:'',
      banners: [],
      videoList: [],
       count: 0,
      isLoading: false,
       weizhi: this.$store.state.adress,
      
    }
  },
   computed: {
    getToken() {
      return this.$store.state.token;
    }
  },
  //注册组件
  components: {
    HomeSearch,
    HomeBanner,
    HomeDram,
    VideoList,
    CommonFooter,
    // MapShow
     },
  //定义方法
  methods: {
     // 获取轮播图数据
    async getBannerData() {
      try {
        const result = await getBanner();
        // console.log(result);
        console.log(result.data.code == 0)
        if (result.data.code == 0) {
          this.banners = result.data.data;
        }
      }catch(error){
          console.log(error)
      }
    },
    // 获取资讯列表
    async getVList(){
        try{
            const result = await getzixun(this.getToken);
            if (result.data.code == 0) {
                this.videoList = result.data.data;
            }
        }catch(error){
            console.log(error)
        }
    },
     onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  mounted(){
      //页面渲染完成调用方法获取数据
      this.getBannerData(); 
      this.getVList()
        console.log(this.$store.state.adress);
            console.log(this.weizhi) 
         
        

  },
  created(){
    this.weizhi = this.$store.state.adress
  }
};
</script>

<style lang="scss" scoped>
.xiaoxi{
  position: absolute;
  font-size: 18px;
  right: 15px;
  top: 25%;
}
</style>
