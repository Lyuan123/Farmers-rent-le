<template>
  <div>
    <div class="shoushuo">
      <div style="width:40%"> 当前所在地址为：</div> 
      <div style="width: 30%;margin-left:-15px"><input type="text" v-model="weizhi" class="input_style"></div>
      <van-button plain hairline type="primary" class="anniu" @click="back()">确定</van-button>
    </div>
    
    <div id="allmap"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  name:"mapshow",
  data() {
    return {
      nowLat: 0,
      nowLng: 0,
      point: {},
      marker: {},
      map: {},
      weizhi:"",
    };
  },
  methods: {
    back(){
      console.log(this.weizhi);
      this.$store.commit('getAdress',this.weizhi)
      console.log( this.$store.state);
      window.history.back();

    },
    //根据动态获取到的经纬度显示当前位置
    useBaiduMap: function () {
      var _this = this;
      // 百度地图API功能
      let Lat = this.nowLat;
      let Lng = this.nowLng;
      // 百度地图API功能*/
      _this.map = new BMap.Map("allmap");
      console.log(this.position);
      // if(this.position.lng !==null && this.position.lat !==null){
      //   _this.point = new BMap.Point(this.position.lng, this.position.lat);
      // }else{
      _this.point = new BMap.Point(Lng, Lat);
      // }
      _this.map.centerAndZoom(_this.point, 15);
      _this.map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
      _this.map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
      _this.marker = new BMap.Marker(_this.point); //创建marker对象
      _this.map.addOverlay(_this.marker); // 将标注添加到地图中
      _this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      //用户确认重新选择位置坐标
      _this.map.addEventListener("click", function (e) {
        _this.disp_confirm(e);
      });
      //获取手机设备高度
      var deviceHeight = window.innerHeight;
      document.getElementById("allmap").style.height = deviceHeight + "px";
    },

    //重新选择位置信息
    disp_confirm(e) {
      var _this = this;
      this.point = new BMap.Point(e.point.lng, e.point.lat);
      _this.point = new BMap.Point(e.point.lng, e.point.lat);
      this.nowLng = e.point.lng;
      this.nowLat = e.point.lat;

      // this.position.lng = e.point.lng
      // this.position.lat = e.point.lat
      _this.marker.setPosition(_this.point); //设置覆盖物位置
      _this.getAddressName();
    },
    // 获取具体位置信息名称
    getAddressName() {
      var _this = this;
      var gc = new BMap.Geocoder();
      gc.getLocation(_this.point, function (rs) {
        var addComp = rs.addressComponents;
        // 百度地图API功能
        _this.marker = new BMap.Marker(_this.point); // 创建标注
        _this.remove_overlay();
        _this.map.addOverlay(_this.marker); // 将标注添加到地图中
        _this.map.centerAndZoom(_this.point, 15);
        var opts = {
          width: 200, // 信息窗口宽度
          height: 100, // 信息窗口高度
          title: "", // 信息窗口标题
          enableMessage: true, //设置允许信息窗发送短息
          message: "",
          enableAutoPan : true,     //自动平移
        };
        var infoWindow = new BMap.InfoWindow(
          rs.address +
            "地址：" +
            addComp.province +
            addComp.city +
            addComp.district +
            addComp.street +
            addComp.streetNumber,
          opts
        ); // 创建信息窗口对象
        _this.marker.addEventListener("click", function (e) {
          e.domEvent.cancelBubble = true; //点击标注时显示当前位置信息  阻止地图的点击事件
          _this.map.openInfoWindow(infoWindow, _this.point); //开启信息窗口
        });
        console.log(addComp);
        _this.weizhi=addComp.province+addComp.city;
      });
    },
    //清除覆盖物
    remove_overlay() {
      this.map.clearOverlays();
    },
  },

  
  created() {
    var _this = this;
    var geolocation = new BMap.Geolocation();

      setTimeout(function () {
      alert("正在定位中")
    },1000)
    
    


    
    //弹出地理授权 获取当前的经纬度
    geolocation.getCurrentPosition(
      function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          _this.nowLat = r.point.lat;
          _this.nowLng = r.point.lng;
          _this.useBaiduMap();
          alert("获取定位成功");
        } else {
          alert("baidu return failed");
        }
      },
      //获取失败时候的回调
      function (r) {
        alert("请允许农租乐获取当前位置信息");
        return {
          //设置高精度
          enableHighAccuracy: true,
        };
      }
    );
  },

  
};
</script>

<style lang="scss" scoped>
#allmap {
  width: 100%;
  height: 700px;
  // background-color: #bfa;
}
.shoushuo{
  width:100%;
  height: 45px;
  line-height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.anniu{
  width: 60px;
  height: 25px;
  border-radius: 30px;
}
</style>