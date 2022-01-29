<template>
  <div class="main">
    <home-search>
       <div class="header_search" slot="left" @click="$router.back(-1)">
        <i class="iconfont cubeic-back"></i>
       </div>
       <div slot="center" >订单列表</div>
       <div class="xiaoxi" slot="right">
         <!-- <i class="iconfont icon-xiaoxi" style="font-size:25px"></i> -->
        
       </div>
    </home-search>
    <!--订单列表-->
    <div class="list" v-if="orders.length > 0" style="margin-top:45px;width:90%;">
      <div class="box" v-for="(item, index) of orders" :key="index">
        <router-link
          :to="{ path: '/coursedetail', query: { video_id: item.video_id } }"
        >
          <div class="smallbox">
            <div class="imgdiv">
              <img :src="item.video_img" alt="⼩滴课堂课程图⽚" />
            </div>
            <div class="textdiv">
              <p class="title">{{ item.video_title }}</p>
              <p class="price">{{ (item.total_fee / 100).toFixed(2) }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="no_order" v-else>
      <p style="font-size:20px">暂未购买商品</p>
    </div>  
    <div class="tuijian">
      <!-- 我可能喜欢 -->
      <div>
      <p style="margin:0 auto;text-align:center;padding-top:20px;padding-bottom:20px"><span style="color:rgb(241, 142, 99)">_____</span>&nbsp;<span style="color:rgb(241, 142, 99);font-weight:800">你可能还喜欢</span>&nbsp;<span style="color:rgb(241, 142, 99)">_____</span></p>
    </div>
    <!-- 商品列表 -->
     <div class="list">
    <div class="course">
        <div class="item_img">
          <img src="./img/1.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">种地工具铁耙家用翻地钢耙松土耙抓钩三齿四齿耙刨花生钉耙园林耙农用工具 车尖大号二齿耙+1.4米木柄 </div>
          <div class="price">￥ 42.30 </div>
          <span class="point">评分：5.6</span>
        </div>
        </div>
    <div class="course">
        <div class="item_img">
          <img src="./img/2.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">种花养花种菜家用三件套不锈钢小铲子虎雀 不锈钢五件套+捆扎线 </div>
          <div class="price">￥  94.35  </div>
          <span class="point">评分：4.6</span>
        </div>
        </div>
    <div class="course">
        <div class="item_img">
          <img src="./img/3.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">家用种菜大锄头除草神器开荒户外小工具挖笋 嘉瑰 中号锄头(头宽15.5厘米)</div>
          <div class="price">￥ 23.68 </div>
          <span class="point">评分：6.5</span>
        </div>
        </div>
    <div class="course">
        <div class="item_img">
          <img src="./img/4.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">锄头家用除草神器挖地多功能老式专用锄草铲农用工具大全锰钢农具 大号木柄梯形锄</div>
          <div class="price">￥  19.80 </div>
          <span class="point">评分：7.3</span>
        </div>
        </div>
    <div class="course">
        <div class="item_img">
          <img src="./img/5.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">割草刀镰刀割草农用锰钢全钢柴树割韭菜神器收割工具农具大全 一号镰刀+40厘米木柄</div>
          <div class="price">￥  19.44 </div>
          <span class="point">评分：5.8</span>
        </div>
        </div>
    <div class="course">
        <div class="item_img">
          <img src="./img/6.jpg" />
        </div>
        <div class="video_info">
          <div class="c_title">木柄把老式多功能锻打除草农具农用工具大全刨地挖笋 小宽锄头+1.4米BK硬木柄</div>
          <div class="price">￥ 58.00</div>
          <span class="point">评分：8.6</span>
        </div>
        </div>
    </div>
   
    
    </div>
  </div>
</template>
<script>
import HomeSearch from "../../components/Search";
import { getOrderList } from "@/api/getData.js";
export default {
  components: {
    HomeSearch,
     },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    //获取订单列表
    async getOrderList() {
      try {
        const result = await getOrderList(this.$store.state.token);
        if (result.data.code == 0) {
          this.orders = result.data.data || [];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>
<style lang="scss" scoped>
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
  width: 168px;
  height: 183px;
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
  font-size: 11px;
  height: 26px;
  line-height: 13px;
  margin-top: 10px;
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
.cubeic-back {
 position: absolute;
  font-size: 22px;
  right: 22px;
  top: 15%;
}
.tuijian{
  width: 100%;
  height: 700px;
  background-color: rgb(227, 230, 227);
  margin-top: 120px;
}
.main{
   background-color: rgb(238, 240, 238);
}
.list {
 padding: 0 20px;
}
// 视频个体
.box {
  width: 100%;
 padding: 20px 0;
 border-bottom: 1px solid #ddd;
 // 标题
 .title {
 font-size: 14px;
 margin-bottom: 15px;
 }
 // 订单详情
 .smallbox {
 //flex左右排列，两端对⻬
 display: flex;
 justify-content: space-between;
 .imgdiv {
 width: 120px;
 height: 80px;
 flex-shrink: 0;
 img {
 width: 100%;
 height: 100%;
 border-radius: 10px;
 }
 }
 .textdiv p {
 margin-top: 10px;
 padding-left: 10px;
 }
 }
}
.no_order {
 margin-top: 20px;
  padding-top: 150px;
 text-align: center;
}
</style>