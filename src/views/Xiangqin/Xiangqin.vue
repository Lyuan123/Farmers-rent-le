<template>
  <div>
    <home-search>
      <div class="header_search" slot="left" to="/search">
         <span @click="$router.back(-1)"
          ><i class="iconfont icon-jiantou"></i
        ></span>
      </div>
      <div slot="center">资讯</div>
      <div class="xiaoxi" slot="right">
        <i class="iconfont icon-more" style="font-size: 28px"></i>
      </div>
    </home-search>
    <div class="box">
      <div class="title">
        <h1>{{videoList.title}}</h1>
      </div>
      <div class="second">
        <div class="littertitle">{{videoList.press}}</div>
      </div>
      <div class="second">
        <div class="littertitle">{{videoList.time}}</div>
      </div>
      <div class="three">
        <div class="content">
          {{videoList.content}}
        </div>
      </div>
      <!-- 图片 -->
      <div class="four" >
        <img :src="videoList.img1" class="im" />
      </div>
      <div class="four" >
        <img :src="videoList.img2" class="im" />
      </div>
      <div class="four" >
        <img :src="videoList.img3" class="im" />
      </div>
      <!-- 视频 -->
      <!-- <div class="four">
        <video
          :src="video"
          class="im"
          controls
          loop
          muted
          style="
            margin-top: 10px;
            height: 100%;
            width: 100%;
            background-size: 100%;
            width: 100%;
            height: 100%;
          "
        ></video>
      </div> -->
      <div class="tuijian">
        <div class="wz">
          点击进入<router-link to="/order">推荐</router-link>可看到更多精彩内容
          <i class="iconfont icon-arrow-right-copy-copy"></i>
        </div>
      </div>
      <div class="piunlun">
        <div class="pin"><div class="pinl">评论</div></div>
        <div class="safa"><img :src="shafaImg" class="im" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
import defaultHeadImg from "@/assets/touxiang.jpg";
import shafaImg from "@/assets/shafa.png";
// import video from "@/assets/1.mp4";
import {  getXiangqin } from "@/api/getData.js";
export default {
  name:"xiangqin",
  components: {
    HomeSearch,
  },
  data() {
    return {
      //视频信息
        videoList:[],
      shafaImg: shafaImg,
      defaultHeadImg: defaultHeadImg,
      // video: video,
    };
  },
  methods:{
        //获取视频详情
        async getDetail(vid){
            try{
               const result =  await getXiangqin(vid)
               if(result.data.code == 0){
                   this.videoList = result.data.data;
                   console.log(this.videoList);
                //    this.chapterList = result.data.data.chapter_list;
              //      for(let i in result.data.data.chapter_list){
              //   chapterList.push(result.data.data.chapter_list[i]);
              // }
              // this.chapterList = chapterList;
               }

            }catch(error){
                console.log(error)
            }
        },
     
    },
     mounted(){
        //渲染完成后拿到相应的数据
        console.log(this.$route.query.info_id)
        this.getDetail(this.$route.query.info_id);
        console.log(typeof this.$route.query.info_id);
    }
};
</script>

<style lang="scss" scoped>
.wz {
  text-align: center;
  position: relative;
  top: 30%;
}
.tuijian {
  width: 93%;
  height: 35px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.pinl {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}
.safa {
  width: 93%;
  margin: 0 auto;
  height: 300px;
  overflow: hidden;
  margin-top: 20px;
  opacity: 0.4;
}
.pin {
  font-size: 20px;
  font-weight: 600;
  width: 100%;

  border-bottom: 0.1px solid rgb(233, 235, 232);
}
.piunlun {
  width: 93%;
  margin: 0 auto;
  margin-top: 15px;
}
.im {
  background-size: 100%;
  height: 100%;
  width: 100%;
}
.four {
  // background-size: 100%;
  width: 93%;
  margin: 0 auto;
  height: 230px;
  overflow: hidden;
  margin-top: 10px;
}
.content {
  font-size: 20px;
  margin-left: 12px;
  line-height: 1.5;
}
.three {
  //  height: 260px;
  width: 100%;
  // background-color: red;
}
.littertitle {
  top: 40%;
  font-weight: bold;
  font-family: 楷体;
  color: #7e8c8d;
  margin-left: 12px;
}
.second {
  margin-top: 5px;
  height: 40px;
  width: 100%;
  // background-color: #bfa;
}
h1 {
  position: relative;
  top: 40%;
  font-size: 25px;
  font-weight: bold;
  font-family: 楷体;
  font-weight: 590;
  margin-left: 12px;
}
.title {
  height: 80px;
  width: 100%;
  // background-color: #bfa;
}
.box {
  margin-top: 47px;
}
.xiaoxi {
  position: absolute;
  font-size: 18px;
  right: 15px;
  top: 25%;
}
.icon-jiantou {
  font-size: 22px;
  position: absolute;
  top: 14%;
}
</style>