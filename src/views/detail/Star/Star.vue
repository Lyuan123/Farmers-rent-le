<template>
  <div>
    <div class="star-container">
      <i v-for="(item,index) in 5" :key="index" :class="{'iconfont icon-xingxing2':true,'light':star >= item }"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Star",
  data() {
    return {};
  },
  props: ["star"]
};
</script>
<style lang="less" scoped>
.star-container {
  display: inline-block;

  i {
    color: #999;
    margin: 0 1.5px;
  }

  .light {
    color: rgb(240, 221, 137);
  }
}
</style>