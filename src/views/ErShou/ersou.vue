<template>

  <div class="list-content">
     <home-search>
      <div class="header_search" slot="left" to="/search">
         <span @click="$router.back(-1)"
          ><i class="iconfont icon-jiantou"></i
        ></span>
      </div>
      <div slot="center">二手市场</div>
      <div class="xiaoxi" slot="right">
       
      </div>
    </home-search>
    <div class="list">
      <!-- 遍历视频 -->
      <router-link
        :key="item.id"
        :to="{ path: '/speak' }"
        class="course"
        v-for="item in videoList"
      >
        <div class="item_img">
          <img :src="item.cover_img" />
        </div>
        <div class="video_info">
          <div class="c_title">{{ item.title }}</div>
          <div class="price">￥ {{ item.price   }}</div>
          <span class="point">{{ item.create_time}}</span>
        </div>
      </router-link>
    </div>
      <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
import {  getNongJu } from "@/api/getData.js";
// import CommonFooter from "@/components/CommonFooter";

export default {
 //注册组件
  components: {
    // CommonFooter,
      HomeSearch,
  },
   data() {
    return {
      videoList: [],
      }
    },
     methods: {
        //获取视频列表
    async getVList(){
        try{
            const result = await getNongJu();
            if (result.data.code == 0) {
                this.videoList = result.data.data;
            }
        }catch(error){
            console.log(error)
        }
    },
    
  },
  mounted(){
      //页面渲染完成调用方法获取数据
      this.getVList()
  }
}
</script>

<style lang="scss" scoped>
.icon-jiantou {
  font-size: 22px;
  position: absolute;
  top: 14%;
}
//列表包裹层边距
.list-content {
  margin-top: 20px;
  padding: 0 13px;
}
//视频包括层
.list {
  display: flex; //设置flex布局
  flex-wrap: wrap; //换行排列
  justify-content: space-between; //两端对齐
  padding-bottom: 55px;
  margin-top: 60px;
}
//视频个体层
.course {
  width: 48%;
  margin-bottom: 17px;
}
//视频图片
.item_img {
  font-size: 0; //消除图片元素产生的间隙
  box-shadow: 0 4px 11px 0 rgba(43, 51, 59, 0.6); //设置图片阴影，rgba前三个参数是颜色编码，最后一个是透明度
  border-radius: 8px; //设置图片圆角
  width: 184px;
  height: 153px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
.c_title {
  //设置超过两行隐藏 start
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  //设置超过两行隐藏 end
  font-size: 14px;
  height: 28px;
  line-height: 15px;
  margin-top: 13px;
  color: #2b333b;
}
//价格
.price {
  margin-top: 8px;
  font-size: 12px;
  color: #d93f30;
  float: left;
}
.point{
  float: right;
   margin-top: 8px;
  font-size: 12px;
  color: #d93f30;
}
</style>
