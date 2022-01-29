<template>
  <div>
      
    <cube-slide :data="swiperSlides" style="padding-top:45px">
      <cube-slide-item
        v-for="(item, index) in swiperSlides"
        :key="index"
        style="height:179.06px"
      >
        <a :href="item.url">
          <img :src="item" style="width:100%; height: 100%;text-align: left;left:0px;position:static"/>
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  name:"banner",
  //获取父组件传到的值
    props:{
        swiperSlides:{
          type:Array, //声明接收的是什么类型
          required:true //是否是必须的
        }
    }

};
</script>
<style lang="scss" scoped>
</style>