<template>
  <div>
      <home-search>
      <div class="header_search" slot="left" >
         <span @click="$router.back(-1)"
          ><i class="iconfont icon-jiantou"></i
        ></span>
      </div>
      <div slot="center">使用说明</div>
      <div class="xiaoxi" slot="right">
        <i class="iconfont icon-zhuanfa1" style="font-size: 27px"></i>
      </div>
    </home-search>
    <div class="img">
        <img src="../../assets/sai.png" class="n">
    </div>
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
export default {
     components: {
    HomeSearch,
  },
}
</script>

<style lang="scss" scoped>
.n{
    width: 100%;
    
}
.icon-jiantou {
  font-size: 22px;
  position: absolute;
  top: 14%;
}
.xiaoxi {
  position: absolute;
  font-size: 18px;
  right: 15px;
  top: 20%;

}
.img{
    width: 100%;
    margin-top: 45px;
}
</style>