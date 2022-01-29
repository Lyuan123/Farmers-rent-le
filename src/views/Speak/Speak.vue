<template>
  <div class="bigbox">
    <home-search>
      <div class="header_search" slot="left" @click="$router.back(-1)">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div slot="center">聊天</div>
      <div class="xiaoxi" slot="right">
        <i class="iconfont icon-stream"></i>
      </div>
    </home-search>
    <div id="receiveMsg"></div>
    <div class="fashong">
      <input type="text" id="msgContent" v-model="hh"/>
      <input
        type="button"
        value="发送"
        onclick="CHAT.chat()"
        class="sent"
       @click="fashong"
      />
    </div>
  </div>
</template>

<script>
window.CHAT = {
  socket: null,
  init: function () {
    //判断浏览器是否支持websocket
    if (window.WebSocket) {
      //创建websocket 对象
      CHAT.socket = new WebSocket("ws://101.200.155.141:7899/ws");
      (CHAT.socket.onopen = function () {
        console.log("链接建立成功");
      }),
        (CHAT.socket.close = function () {
          console.log("链接关闭");
        }),
        (CHAT.socket.onerror = function () {
          console.log("发生异常");
        }),
        (CHAT.socket.onmessage = function (e) {
          console.log("接受消息：" + e.data);
          var receiveMsg = document.getElementById("receiveMsg");
          var html = receiveMsg.innerHTML; //获取本对象原🈶️的内容
          //嵌入新的内容
          receiveMsg.innerHTML = html + "<br/>" + e.data;
        });
    } else {
      console.log("您的浏览器不支持websocket协议");
    }
  },
  chat: function () {
    //获取发送消息框中所输入内容
    var msgContent = document.getElementById("msgContent").value;
    //将客户输入的消息进行发送
    CHAT.socket.send(msgContent);
  },
 
};
CHAT.init();
import HomeSearch from "../../components/Search";
// import { getliaotian} from '../../api/getData'
export default {
  components: {
    HomeSearch,
  },
  data(){
	  return{
		    hh:'',
	  }
	
  },
  methods: {
    fashong() {
		  this.hh='';
		console.log(this.hh);
	  
    },

  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: aliceblue;
}
.icon-jiantou {
  font-size: 22px;
  margin-left: -3px;
}
.fashong {
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  //   margin-top: 698px;
  z-index: 9999;
}
#msgContent {
  margin-left: 10px;
  width: 75%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgb(160, 158, 158);
}
.bigbox {
  background-color: aliceblue;
  width: 100%;
  overflow: hidden;
}
.sent {
  width: 20%;
  height: 40px;
  border-radius: 20px;
  margin-left: 5px;
  background-color: rgb(52, 210, 221);
  margin-bottom: 25px;
}
#receiveMsg {
  width: 95%;
  margin-top: 10px;
  line-height: 40px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
  background-color: aliceblue;
  height: 750px;
}
.icon-stream {
  position: absolute;
  right: 15px;
  top: 13px;
  font-size: 20px;

  color: rgb(92, 94, 94);
}
</style>