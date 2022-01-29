<template>
    <div>
        <header-search>
             <div class="header_search" slot="left" to="/search">
         <span @click="$router.back(-1)"
          ><i class="iconfont icon-jiantou"></i
        ></span>
      </div>
            <div slot="center">城市选择</div>
        </header-search>

        <div class="current-city">
            <h2 v-if="adress == null">当前城市：北京</h2>
            <h2 v-else>当前城市：{{adress}}</h2>
        </div>
        <CityHot />
    </div>
</template>
<script>
import HeaderSearch from "../../components/Search";
import CityHot from './CityHot/CityHot'
import { mapState } from 'vuex'
export default {
    name:'zhupinCity',
    data(){
        return{
            
        }
    },
    components:{
        HeaderSearch,
        CityHot
    },
    computed: {
        ...mapState(['adress'])
    },
}
</script>
<style lang="less" scoped>
.current-city {
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 30px 0;
    margin-top: 45px;
    border-bottom: 1px solid #f1f1f1;
    h2{
      font-size: 20px;
    }
}    
</style>