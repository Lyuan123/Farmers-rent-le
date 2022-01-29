<template>
  <div>
      <div class="nongwu">农务人员介绍</div>
      <div class="jishu1">
        <i class="xiaolian iconfont icon-stream" @click="back"></i>
        <h1 class="jishu">技术人员</h1>
      </div>
      <div class="first">
        <div class="first-one">
          <div class="first-two"  @click="toggleShopShow">
            <div class="img">
              <img src="./img/zuanjia1.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：张根生</div>
            <div>专业：农业科技</div>
            <div>标签：帮助每一位农民实现付出最小化，利益最大化的科技创新</div>
          </div>
          <div class="first-two"  @click="toggleShopShow">
             <div class="img">
              <img src="./img/zuanjia2.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：王立</div>
            <div>专业：热带农业科学</div>
             <div>标签：让世界了解中国农民，让中国农民走向世界的舞台</div>
          </div>
          
        </div>
        <div class="first-one">
          <div class="first-two"  @click="toggleShopShow">
            <div class="img">
              <img src="./img/zuanjia3.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：张兴哲</div>
            <div>专业：设施农业技术</div>
            <div>标签：加快农村科技进步，促进农业增效农民增收</div>
          </div>
          <div class="first-two"  @click="toggleShopShow">
             <div class="img">
              <img src="./img/zuanjia4.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：李强</div>
            <div>专业：农业部小麦</div>
             <div>标签：追求产供销和谐，实现农业经济双赢</div>
          </div>
          
        </div>
        <div class="first-one">
          <div class="first-two"  @click="toggleShopShow">
            <div class="img">
              <img src="./img/zuanjia5.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：芦智强</div>
            <div>专业：设施农业技术</div>
            <div>标签：科学技术促丰收，市场信息促发展</div>
          </div>
          <div class="first-two"  @click="toggleShopShow">
             <div class="img">
              <img src="./img/zuanjia6.jpg" style="width:100%;height:100%">
            </div>
            <div>姓名：郭冰峰</div>
            <div>专业：科学测土</div>
            <div>标签：与时代同行，与科技携手，共创美好新农村</div>
          </div>
          
        </div>
        
      </div>
      <transition name="fade">
      <div class="shop-brief-modal" v-show="shopShow">
        <div class="brief-modal-content">

           <h2 class="content-title"> 
          <span class="content-tag">
            <span class="mini-tag">铭牌</span>
          </span>
            <span class="content-name">专家详细信息</span>
            
    </h2>
    <div style="margin-top:4px">姓名：张根生</div>
    <div >手机号：13834273948</div>
    <div>地址：山西省晋中市</div>
         <h3 class="brief-modal-title">
            <span>备注</span>
          </h3>
           <div class="brief-modal-notice">
            帮助每一位农民实现付出最小化，利益最大化的科技创新，若有问题需要请教，请根据上方联系方式交流
          </div>
          <div class="mask-footer" @click="toggleShopShow">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      shopShow: false, //默认内容不显示
    };
  },
  methods: {
    back(){
      this.$router.replace('/')
    },
    toggleShopShow() {
      this.shopShow = !this.shopShow; //使false变为true显示
    },
  },
};
</script>


<style style lang="stylus" rel="stylesheet/stylus" scoped>
// &.fade-enter-active,&.fade-leave-active
//         transition opacity .8s
// &.fade-enter,&.fade-leave-to
//         opacity 0

        .content-title
          font-size 20px
          line-height 24px
          font-weight 700
          white-space nowrap
          position relative
          display flex
          align-items center
          justify-content center
          color #333
        .content-tag
            border-radius 2px
            background-image linear-gradient(90deg, #fff100, #ffe339)
            width 36px
            height: 18px
            margin-right 10px
            color #6a3709
            font-style normal
            position relative
        .mini-tag
              position absolute
              left 0
              top 0
              right -100%
              bottom -100%
              font-size 24px
              font-weight 600
              transform scale(.5)
              transform-origin 0 0
              display flex
              align-items center
              justify-content center
        .content-name
            font-weight 700
            text-align left
            overflow hidden
            text-overflow ellipsis
.brief-modal-title
          position relative
          text-align center
          margin 15px auto 15px
          width 85px
          background-image linear-gradient(90deg, #fff, #333 50%, #fff)
          background-size 100% 1px
          background-position 50%
          background-repeat no-repeat
          > span
            font-size 12px
            padding 0 6px
            color #999
            background-color #fff
        .brief-modal-notice
          font-size 13px
          line-height 1.54
          color #333
          overflow-y auto

        .mask-footer
          position absolute
          bottom -60px
          left 50%
          padding 6px
          
          border-radius 50%
          transform translateX(-50%)
          span
            font-size 40px
            color black
     .brief-modal-content{
       position: relative;
        width:  80%;
        padding : 25px 20px;
        border-radius:  5px;
        background: #fff;
        z-index : 99;
        display : flex;
        flex-direction:  column;
     }
        
.shop-brief-modal{
      position:fixed;
      top :0;
      left :0;
      right: 0;
      bottom :0;
      display :flex;
      justify-content :center;
      align-items :center;
      z-index: 52;
      flex-direction :column;
      color :#333 ;
}
    

.nongwu {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgb(182, 252, 225);
  font-size: 30px;
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
}
.xiaolian {
  position: absolute;
  color: rgb(182, 252, 225);
  font-weight: bold;
  font-size: 30px;
  left: 1%;
  margin-top: 10px;
}
.jishu {
  font-size: 25px;
  padding-top: 10px;
  width: 50%;
  margin-left: 100px;
  border-bottom: 1px solid black;
}
.jishu1 {
  margin-top: 10px;
}
.first {
  width: 100%;
  height: 800px;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.first-one {
  width: 100%;
  height: 250px;
  // background-color: #bfa;
  border-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.first-two {
  width: 48%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.img {
  width: 100%;
  height: 60%;
  overflow: hidden;
}
</style>