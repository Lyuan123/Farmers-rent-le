<template>
  <div>
    <div class="header">
      <div class="headere">
        <slot name="left"></slot>
        <span class="header_title">
          <slot class="header_title_text " name="center"></slot>
        </span>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  border-bottom:0.2px solid #d3d2d2;
  position: fixed;
  width: 100%;
  height: 45px;
  background-color:rgb(248, 227, 158);
  display: flex; //flex左右布局
//   padding: 5px 10px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 9999;
}
.headere{
 position:relitive;
 top:0px;
 left: 0px;
 right: 0px;
//  bottom: 0px;
}

 .header_search{
    position:absolute;
      left:15px;
      top: 20%;
   
      width: 10%;
      height: 50%;
 }
 .icon-sousuo{
     font-size: 25px;
    //  color: #fff;
 }
 .header_title{
     position: absolute;
      top :50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width :50%;
      color :balck;
      text-align: center;
 }
 .header_title_text{
   font-size: 20px;
 }
</style>