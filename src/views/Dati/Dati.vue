<template>
  <div class="second"> 
    <div class="back" style="padding-top:10px" @click="$router.back(-1)">
      <i class="iconfont icon-jiantou" style="margin-left: -370px; display: block; font-size: 23px;color:rgb(203, 204, 204)"></i>
    </div>
    <div class="dati">
    <!-- 问卷题 -->
    <div v-for="(item, index) in questionList" :key="item.id" >
      <!-- 测试 -->
      <div class="test-content" v-if="index == page">
        <div class="test-title" v-if="item.id == 1">第一题</div>
        <div class="test-title" v-if="item.id == 2">第二题</div>
        <div class="test-title" v-if="item.id == 3">第三题</div>
        <div class="test-title" v-if="item.id == 4">第四题</div>
        <div class="test-title" v-if="item.id == 5">第五题</div>
        <div class="test-title" v-if="item.id == 6">第六题</div>
       

        <div class="content-title">{{ index + 1 }}.{{ item.title }}</div>

        <van-radio-group v-model="radio">
          <van-radio :name="item.a " class="text-x">{{
            item.a
          }}</van-radio>
          <van-radio :name="item.b " class="text-x">{{
            item.b
          }}</van-radio>
          <van-radio :name="item.c " class="text-x">{{
            item.c
          }}</van-radio>
          <van-radio :name="item.d " class="text-x">{{
            item.d
          }}</van-radio>
         
        </van-radio-group>

        <div class="btn">
         
          <div
            class="next"
            @click="toNext(index, item.id)"
            v-if="isShow"
            :class="index == 0 ? 'next' : 'before-next'"
            
          >
            <span class="spa">下一题</span>
          </div>

          <!-- 提交 -->
          <div
            class="tijiao"
            v-if="!isShow"
            @click.prevent="getCode"
            :class="index == 0 ? 'next' : 'before-next'"
          >
           <span class="spa"> 完成答题</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
 <script>
import { getQuest,getScore } from "@/api/getData.js";
export default {
  name:'dati',
    computed: {
    getToken() {
      return this.$store.state.token;
    }
  },
  name: "SecondQuestionnaire",

  data() {
    return {
       // 获取问卷数据
      questionList:[],
      // 当前页
      page: 0,
      // 选项
      radio: "",
      // 题目的id
      ids: [],
      // 分数
      score:0,
      // 存放每一题的id和num
      questionInfos: [],
      // 当前题目的序号等于当前题目的条数
      isShow: true,
     
    };
  },
  // created() {
  //   // 获取问卷数据
  //   this.getQuestion();
  // },
  mounted(){
      //页面渲染完成调用方法获取数据
      this.getQuestion();
     
      
  },

  methods: {
    // 获取问卷数据
    async getQuestion() {
        try{
               const result =  await getQuest()
               console.log(result);
               if(result.data.code == 0){
                   this.questionList = result.data.data;
                   console.log(this.questionList);
               }

            }catch(error){
                console.log(error)
            }
    },

    // 点击下一题
    toNext(index, id) {
      
        console.log(this.page);

      // 2. 保存答题数据
      let question = { ids: this.radio.slice(0)};
      this.questionInfos[index] = question;
      
      
      // this.questionInfos.forEach((questionInfo) => {
      //   console.log( questionInfo.ids);
      // });
      if (this.questionInfos[index].ids==this.questionList[index].answer) {
        this.score=this.score+10;
        console.log(this.score);
      }else{
         this.score=this.score+0;
        console.log(this.score);
      }
      
      // console.log(this.questionInfos[index].ids);
      // console.log(this.questionList[index].answer);
      // 3. index ++；
      index++;
     
      // 5. page ++
      this.page++;
      console.log(this.page);
      // console.log(this.index);
      // 6. 其他（如按钮隐藏）
      // 当前页等于最后一题 下一题按钮隐藏
      if (this.page == this.questionList.length - 1) {
        return (this.isShow = false);
      } else {
        return (this.isShow = true);
      }
    },

    // 点击提交
    async submit(n) {
      alert(this.score)
      // for (var i = 0; i < this.questionInfos.length; i++) {
      //   this.ids[i] = this.questionInfos[i].ids;

      //   this.nums[i] = this.questionInfos[i].nums;
      // }
      // 发现点击最后一题时用户点击提交 打印出来少一条最后一页的数据
    },
     async getCode () {
          // 发送ajax请求(向指定手机号发送验证码短信)
          const result = await getScore(this.score,this.getToken)
          console.log(result);
          // 根据结果数据处理
        if(result.data.code===0) {
          
          // 去登录界面
          this.$router.replace('/score')
        } else {
         
          // 显示警告提示
          // const msg = result.msg
          console.log("答题失败");
        }

        
        



      },
  },
};
</script>
<style lang="scss" scoped>
.second{
  background-image: url(./img/datibeijing.png);
  background-size: cover;
  width: 100%;
  height: 800px;
}
.dati{
  width: 100%;
  height: 580px;
  // background-color: #bfa;
  margin: 0 auto;
  display: block;
  padding-top: 200px;
  background-image: url(./img/dati.png);
  background-size: 100% 100%;
  margin-top: -80px;
}
.test-content{
  margin-left: 50px;
}
.test-title{
  margin-left: 93px;
  margin-top: 10px;
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
}
.content-title{
  width: 290px;
  margin-bottom: 40px;
}
.text-x{
  width: 100%;
  height: 25px;
  
  margin-bottom: 40px;

}
.next{
  margin-top: 10px;
  margin-left: 150px;
  text-align: center;
  width:150px;
  height:120px;
  // background-color: #bfa;
  background-image: url(./img/next.png);
  background-size: 100% 100%;

}
.spa{
  display: inline-block;
  margin-top: 50px;
}
.tijiao{
  //  margin-top: 10px;
  margin-left: 150px;
  text-align: center;
  width:150px;
  height:120px;
  // background-color: #bfa;
  background-image: url(./img/next.png);
  background-size: 100% 100%;
}
</style>