<template>
  <div class="Data">
    <home-search>
      <div slot="center">租赁平台</div>
    </home-search>
    <!-- <div class="pkone">
      <img :src="defaultHeadImg" style="width: 100%; margin-top: 45px" />
    </div> -->
    <div style="height:30px"></div>
    <div class="second">
      <img :src="info.head_img" class="im"/>
      <h1 class="font">{{info.name}}</h1>
      <h1 class="fontt">简介： 相信科技改变世界</h1>
      <h1 class="fonttt">积分：{{info.score}}</h1>
      <img src="./img/bejin.jpg" class="pktwo" />
    </div>
    <div class="model">
      <div class="modelone">_______租赁模式________</div>
    </div>
    <div class="race">
      <!-- <div class="ii"> -->
        <div class="pi">
   
        </div>
        <div>
          <router-link to="/zupin">
        <div class="pipei">租赁市场</div>
         <img src="./img/nongmin.jpg" class="ione">
         </router-link>
         </div>
         
       <div class="pii">
        </div>
       <router-link to="/dati">
        <div class="pipeie">农具小贴士</div> 
        <!-- </div> -->
      <!-- <span class="ii"> -->
        <img src="./img/xiwang.jpg" class="ionee"></router-link>
      <!-- </span> -->
    </div>
     <div class="model" style="height:40px">
      <div class="modelone" style="margin-top:1px">_______交易情况________</div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">李先生</div>
      </div>
      <div class="pai">
        <div class="paimi">  33分钟前  </div>
      </div>
      <div class="pai">
         <div class="paimi">出租铁锹</div>
      </div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">奋斗</div>
      </div>
      <div class="pai">
        <div class="paimi">  53分钟前  </div>
      </div>
      <div class="pai">
         <div class="paimi">租赁了喷雾器</div>
      </div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">飞鸿腾达</div>
      </div>
      <div class="pai">
        <div class="paimi">1小时前</div>
      </div>
      <div class="pai">
         <div class="paimi">出租了锄头</div>
      </div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">知足常乐</div>
      </div>
      <div class="pai">
        <div class="paimi">3小时前</div>
      </div>
      <div class="pai">
         <div class="paimi">出租了除草机</div>
      </div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">缘来有你</div>
      </div>
      <div class="pai">
        <div class="paimi">4小时前</div>
      </div>
      <div class="pai">
         <div class="paimi">租赁了收割机</div>
      </div>
    </div>
    <div class="paimin">
      <div class="pai">
        <div class="paim">归零</div>
      </div>
      <div class="pai">
        <div class="paimi">6个小时前</div>
      </div>
      <div class="pai">
         <div class="paimi">租赁了割草机</div>
      </div>
    </div>
   
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeSearch from "../../components/Search";
import CommonFooter from "../../components/CommonFooter";
import { getUserInfo } from "@/api/getData.js";
export default {
  name:'data',
  components: {
    HomeSearch,
    CommonFooter,
  },
  data() {
    return {
      videoList: [],
      info: {},
    };
  },
  methods: {
     //获取用户信息
    async getInfo() {
      try {
        const result = await getUserInfo(this.$store.state.token);
        if (result.data.code === 0) {
          this.info = result.data.data;
          //  location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
.Data{
  background-image: url(./img/pkbeijing.jpg);
  background-size: 100% 100%;
}
.paimi{
  text-align: center;
  color: black;
}
.paim{
  display: block;
  color: black;
  text-align: center;
}
.pai{
  display: block;
  width: 29%;
  height: 30px;
  margin-top: 5px;
  // background-color: rgb(47, 48, 47);
  margin-left: 9px;
  font-size: 18px;
  color: #fff;
  
}
.paimin{
  width: 100%;
  height: 40px;
  margin-bottom: -1px;
  // background-color: rgb(47, 48, 47);
  display: flex;
  justify-content: space-around;
  }
.pii{
  position:absolute;
  background-color: rgb(47, 48, 47);
   opacity: 0.6;
  width:100px;
  height: 26px;
  z-index: 1;
  left:247px;
  top:130px;
  border-radius: 10px;
  }
.pipeie{
  font-size:18px; 
  position:absolute;
  width:120px;
  left:233px;
  top:130px;
  margin-left: 4px;
  margin-top: 2px;
  color: #fff;
  z-index: 1;

  }
.pi{
  position:absolute;
  background-color: rgb(47, 48, 47);
   opacity: 0.6;
  width:100px;
  height: 26px;
  z-index: 1;
  left:62px;
  top:130px;
  border-radius: 10px;
  }
.pipei{
  font-size:18px; 
  position:absolute;
  width:120px;
  left:48px;
  top:130px;
  margin-left: 4px;
  margin-top: 2px;
  color: rgb(253, 249, 249);
  z-index: 1;
 
  }

.ii{
  position:absolute;
  width:50%;
  left:200px;
}
.ione{
  margin-top: 10px;
  width:35%;
  height:160px;
  left:42px;
  position:absolute;
  border-radius:25px;
}
.ionee{
  margin-top: 10px;
  width:35%;
  left:225px;
  height:160px;
  position:absolute;
  border-radius:25px;
}
.race{
  width: 100%;
  position: relative;
  height: 200px;
}
.modelone{
  font-size: 20px;
  color: rgb(37, 37, 37);
  margin-top: 20px;
  display: inline-block;
}
.model{
  width: 100%;
  height: 57px;
  text-align: center;
}
.imm {
  margin-top: 5px;
  display: inline-block;
  width: 100%;
  height: 200px;
  background-color: red;
  position: absolute;
}
.pkone {
  width: 100%;
}
.second {
  width: 100%;
  height: 200px;
  margin-top: 45px;
  text-align: center;
  position: relative;

}

.pktwo {
  
  width: 90%;
  height: 100%;
  border-radius: 25px;
}
.im{
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 7px;
  position: absolute;
  top: 20px;
  left: 40px;
  
}
.font{
  position: absolute;
  font-size:25px;
  top:35px;
  left:120px;
  color:rgb(19, 18, 18);
  // font-weight:bold
}
.fontt{
   position: absolute;
  font-size:13px;
  top:72px;
  left:123px;
  color:rgb(29, 27, 27);
}
.fonttt{
   position: absolute;
  font-size:17px;
  top:142px;
  right:60px;
  color:rgb(29, 28, 28);
}
</style>
