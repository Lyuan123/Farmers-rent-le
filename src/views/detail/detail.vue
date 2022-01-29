<template>
  <div>
     <home-search>
     
       <div class="header_search" slot="left" @click="$router.back(-1)">
        <i class="iconfont icon-jiantou" style="font-size:23px;color:black;color:#6d6868"></i>
        </div>
       <div slot="center" >详情页</div>
    </home-search>
    <!-- 轮播图 -->
    <div>
       <home-banner :swiperSlides= "swiperSlides" ></home-banner>
    </div>

    <!-- tabs -->

    <tabs :currentIndex="currentIndex" @changeCurrentIndex="changeCurrentIndexHandler">
      <tab label="农具信息" index="0">
          <div v-if='detailsInfo.title'>
                <DetailsInfo :detailsInfo='detailsInfo'  />
          </div>
          <div v-else>数据正在加载中...</div>
      </tab>
      <tab label="农具评价" index="1">
          <DetailsComment />
      </tab>
    </tabs>
  </div>
</template>
<script>
import HomeBanner from "./component/Banner";
import {getRobote} from '@/api/getData.js'
import HomeSearch from "../../components/Search";
import DetailsComment from './DetailsComment/DetailsComment'
import DetailsInfo from './DetailsInfo/DetailsInfo'
// 引入tabs
import Tabs from "@/components/tabs/index.js";
import Vue from "vue";
Vue.use(Tabs);
export default {
  name: "Details",
  data() {
    return {
      swiperSlides: [],
      currentIndex: 1,
      detailsInfo: {}
    };
  },
  components: {
      HomeSearch,
    HomeBanner,
    DetailsComment,
    DetailsInfo
  },
  methods: {
    changeCurrentIndexHandler(index) {
      this.currentIndex = index;
    }
  },
     mounted() {
          // 获取列表数据
         getRobote().then(res =>{
             console.log(res);
             this.swiperSlides =res.data.detail.imgs
            this.detailsInfo = res.data.detail
               console.log(this.swiperSlides);
                  console.log(this.detailsInfo);
         })
    },
};
</script>
