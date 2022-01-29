<template >
  <div>
      <div class="header">
          <h1 style="margin-left:20px">热点周边</h1>
          <div class="most">
              更多
              <i class="iconfont icon-arrow-right-copy-copy" style="margin-left:-4px"></i>
          </div>
      </div>
       <router-link
        :key="item.id"
        :to="{ path: '/xiangqin', query: { info_id: item.id } }"
        class="new"
        v-for="item in videoList"
      >
      <div class="new">
        
          <div class="newe">
            <div class="newfirst">
                <div class="title">
              <div  style="height: 35px;width: 100%;font-family:KaiTi;font-size:20px;font-weight:600;
              display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;font-size:18px;">
                
                {{item.title}}
                </div>
                </div>
                <div class="little_title">
                    <div  style="width:31%;margin-right:8px;color: rgb(172, 170, 170);font-family: 楷体;">{{item.press}}</div>
                    <div  style="width:62%;margin-right:8px;color: rgb(172, 170, 170);font-family: 楷体;">{{item.time}}</div>
                </div>
            </div>
        
          <div class="item_img">  
            <img :src="item.image" />
            </div>
       </div>  
      
   </div> </router-link>
    <div style="height:30px;"></div>
  </div>
</template>

<script>
// import Img from '../../../assets/denglu.jpg'
export default {
  name:"videolist",
   props: {
     
    videoList: {
      type: Array,
      required: true,
    },
  },
  

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 35px;
    // background-color: red;
}
h1{
    float: left;
    padding-top:5px;
    font-family: 楷体;
    font-size: 23px;
    font-weight: 700;
    
}
.most{
    float: right;
    margin-top: 10px;
    margin-right: 15px;
    //  font-family: 隶书;
    color: rgb(172, 170, 170);
    font-size: 14px;
}
.new{
    width: 100%;
    height: 130px;
    // background-color: #bfa;
     border-bottom: 1px solid rgb(172, 170, 170);
}
.newe{
    width: 97%;
    margin:0 auto;
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   
}
.newfirst{
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
    width: 100%;
    height: 50px;
    // background-color: red;
    margin-right: 20px;
     float: left;
     margin-top: 20px;
    
}
.little_title{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30px;
    // background-color: black;
    margin-top: 15px;
    // margin-left: 10px;
    margin-right: 10px;
    // float: left;
   
}
.item_img{
  width: 35%;
  margin-left: -7px;
}
  img {
    width: 100%;
    height: 100px;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 10px;
   
//   }
}

</style>