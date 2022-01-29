<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    
<div class="swiper-slide">
  <div class="dram">
    <div class="dramfirst">
      <router-link to="/capatch">
      <div class="dramsecond">
         <img src="./tubiao/jiaoxueshipin.png" style="width:45px;height:45px;position:absolute;left:30px;top:5px"/>
        <span class="text" style="left:20px">使用说明</span>
      </div>
        </router-link>
    </div>
  
    <div class="dramfirst">
       <router-link to="/teachvideo">
      <div class="dramsecond">
        <img src="./tubiao/saishi.png" style="width:45px;height:45px;position:absolute;left:38px;top:5px"/>
        <span class="text">农机教学</span>
      </div>
       </router-link>
    </div>
    <div class="dramfirst">
       <router-link to="/teach">
      <div class="dramsecond">
        <img src="./tubiao/zhibo.png" style="width:40px;height:45px;position:absolute;left:40px;top:5px;border-radius:20%"/>
        <span class="text" style="left:30px">专家指导</span>
      </div>
       </router-link>
    </div>
    <div class="dramfirst">
       <router-link to="/ersou">
      <div class="dramsecond">
         <img src="./tubiao/shangcheng.png" style="width:50px;height:45px;position:absolute;left:35px;top:3px"/>
        <span class="text" style="left:28px">二手交易</span>
      </div>
       </router-link>
    </div>
    
  </div>
   </div>
  <div class="swiper-slide">
    
  <div class="dram">
    <div class="dramfirst">
      <router-link to="/login">
      <div class="dramsecond">
        <img src="./tubiao/img1.png" style="width:35px;height:33px;position:absolute;left:35px;top:11px"/>
        <span class="text" style="left:20px">专家解析</span>
      </div>
        </router-link>
    </div>
  
    <div class="dramfirst">
       <router-link to="/login">
      <div class="dramsecond">
        <img src="./tubiao/qiandao.png" style="width:45px;height:45px;position:absolute;left:35px;top:5px"/>
        <span class="text" style="left:28px">农务人员</span>
      </div>
       </router-link>
    </div>
    <div class="dramfirst">
       <router-link to="/login">
      <div class="dramsecond">
         <img src="./tubiao/huodong.png" style="width:45px;height:45px;position:absolute;left:40px;top:5px"/>
        <span class="text" style="left:30px">售后服务</span>
      </div>
       </router-link>
    </div>
    <div class="dramfirst">
       <router-link to="/login">
      <div class="dramsecond">
         <img src="./tubiao/gengduo.png" style="width:47px;height:40px;position:absolute;left:30px;top:7px"/>
        <span class="text" style="left:20px">政策介绍</span>
      </div>
       </router-link>
    </div>
    
  </div>
  
  </div>
   
  </div>
  <div class="swiper-pagination"></div>
  
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {

  mounted(){
    new Swiper ('.swiper-container', {
      loop: false, // 循环模式选项
       pagination: {
      el: '.swiper-pagination',
       }
    })
  }
};
</script>

<style lang="scss" scoped>

.big{
    width: 100%;
   
  height: 160px;
}
.dram {
  display: flex;
  width: 100%;
  height: 80px;
  // background-color: #abf;
  justify-content: space-around;
}
.dramfirst {
  width: 25%;
  height: 100%;
  // background-color: #bfa;
}
.dramsecond {
  position: relative;
  height: 100%;
}


.text{
  position: absolute;
  bottom: 6px;
  left: 25px;
}

</style>