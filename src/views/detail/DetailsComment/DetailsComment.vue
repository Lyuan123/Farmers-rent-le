<template>
  <div class="comment-list">
    <div class="comment-item" v-for='(item,index) in commentData' :key='index' >
      <h3 style="text-align:left">
        <i class="iconfont icon-gerentouxiang_o" ></i>
        &nbsp;
        {{item.username}}
      </h3>
     
      <p style="text-align:left">{{item.comment}}</p>
       <Star :star='item.star' style="text-align:left" />
    </div>

  </div>
</template>
<script>
import {getRobote} from '@/api/getData.js'
import Star from '../Star/Star'
export default {
    name:'DetailsComment',
    data(){
        return{
            commentData:{},
            page:0
        }
    },
    components:{
        Star
    },
     mounted() {
          // 获取列表数据
         getRobote().then(res =>{
             console.log(res);
             this.commentData = res.data.view
         })
    },

}
</script>
<style lang="less" scoped>
.comment-item {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 10px;
  margin-bottom: 10px;
  h3 {
    font-size: 18px;
    line-height: 1.5;
    color: #666;
  }
  p {
    color: #999;
    line-height: 1.5;
  }
}
.comment-list {
  padding: 10px;
}
</style>