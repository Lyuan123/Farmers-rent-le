<template>
    <div>
        <div v-if='searchListData.length>0'>
            <Item v-for='(curdata,index) in searchListData' :key='index' :curdata='curdata' />
        </div>
        <div v-else>数据正在加载中....</div>

    </div>
</template>
<script>
import {getRobote} from '@/api/getData.js'
import Item from './Item/Item'

export default {
    name:'SearchList',
    data(){
        return{
            searchListData:[],
            hasMore:false,
            page:0
        }
    },
    components:{
        Item,
    },

    methods: {
          
        
    },
    mounted() {
          // 获取列表数据
         getRobote().then(res =>{
             console.log(res);
             this.searchListData = this.searchListData.concat(res.data.user)
            this.hasMore = res.data.hasMore
               console.log(this.searchListData);
                  console.log(this.hasMore);
         })
    },
    
}
</script>