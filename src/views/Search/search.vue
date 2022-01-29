<template>
    <div>
        <div id="search-header" class="clear-fix">
            <span class="back-icon float-left" @click="back">
                <i class="iconfont icon-jiantou"></i>
            </span>
            <div class="input-container">
                <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="想租什么机器?"/>
            </div>
        </div>
        <!-- 列表部分 -->
        <SearchList />
    </div>
</template>
<script>

import SearchList from './SearchList/SearchList'
export default {
    name:'Search',
    data(){
        return{}
    },
    components:{
        SearchList
    },

    methods: {
        back(){
            window.history.back();
        },
    }
}
</script>
<style lang="less" scoped>
#search-header {
    background-color: #f8e39e;
    color: #fff;
    padding: 10px;
    text-align: center;
    position: relative;

    .input-container {
        background-color: #fff;
        border-radius: 15px;
        overflow: hidden;
        padding: 5px;
        text-align: left;
        margin-left: 30px;
        margin-right: 10px;
         color: #ccc;

        i {
            color: #ccc;
        }
    }

    .back-icon {
        width: 16px;
        height: 16px;
        margin-top: 6px;
            float: left;
    }
}
    
</style>