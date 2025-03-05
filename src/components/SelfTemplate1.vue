<template>
  <div class="container">
    <div class="title">旅游资讯</div>
    <div class="content" v-for="(item,index) in list" @click="showNews(item)" v-show="((currentPage-1)*pageSize < index+1) && (index+1 <= currentPage*pageSize)">
      <div class="top">{{item.title}}</div>
      <div class="date">{{ item.date }}</div>
    </div>


    <!--分页实现-->
    <div class="page">
      <div>当前第<b>{{ currentPage }}</b>页</div>
      <div>共<b>{{Math.ceil(total/pageSize)}}</b>页</div>
      <!--    <button>下一页</button>-->
      <el-button :disabled="preDisable" @click="prePage()">上一页</el-button>
      <el-button :disabled="nextDisable" @click="nextPage()">下一页</el-button>
    </div>
  </div>


</template>

<script>
export default {
  name: "SelfTemplate1",
  data(){
    return{
      list: [
        {id: '0', title: '周六强冷空气抵厦 下周一最低温4℃', date: '2022-12-14'},
        {id: '1', title: '厦门一处山地公园焕新上线', date: '2023-02-23'},
        {id: '2', title: '邓超来厦门！这些地方又要火了→', date: '2022-12-14'},
        {id: '3', title: '定了！盼了一年！免票，详情请戳→', date: '2022-12-14'},
        {id: '4', title: '作家李秋沅荣获 国际儿童文学奖', date: '2022-12-14'},
        {id: '5', title: '激发产业新活力 开创文旅新格局', date: '2022-12-14'},
        {id: '6', title: '翔安东路紫花绣球风铃木花开正盛', date: '2022-12-14'},
        {id: '7', title: '厦门近期天气忽冷忽热 "春捂"要做好以防着凉感冒', date: '2022-12-14'},
        {id: '8', title: '美食藏不住了！这家沙茶面登上《早餐中国》→', date: '2022-12-14'},
        {id: '9', title: '二月二龙抬头 海沧刘山社:送“红龟”寓意“吉祥幸福”', date: '2022-12-14'},
        {id: '10', title: '本周闽南大戏院好戏连台', date: '2022-12-14'},
      ],
      currentPage: 1, //初始页
      pageSize: 6, //    每页的数据
      total: 0,  //总数
      nextDisable: false,
      preDisable: false
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showNews:function (val){
      // console.log(val)
      this.$router.push({
        path: '/news',
        query:{
          id: val.id, title: '旅游资讯', sub_title: val.title, date: val.date
        }
      })
    },
    nextPage:function (){
      if(Math.ceil(this.total/this.pageSize)!=this.currentPage){
        this.currentPage+=1;
        this.preDisable = false
      }
    },
    prePage:function (){
      if(this.currentPage!=1){
        this.currentPage-=1;
        this.nextDisable = false
      }
    }
  },
  mounted() {
    this.total = this.list.length
  },
  beforeUpdate() {
    if(Math.ceil(this.total/this.pageSize)==this.currentPage){
      this.nextDisable = true
    }
    if(this.currentPage==1){
      this.preDisable = true
    }
  }
}
</script>

<style scoped>
.container{
  width: 60%;
  margin-left: 20%;
  min-height: 500px;
}
.title{
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: rgb(0,98,165);
  color: white;
  line-height: 80px;
  padding-left: 15px;
  font-size: 20px;
  font-weight: 800;
}
.content{
  width: 100%;
  padding: 15px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(225,225,225);
  margin-top: 5px;
}
.content .top{
  font-weight: 600;
  color: rgb(102,102,102);
}
.content .date{
  color: rgb(155, 155, 155);
}
.content:hover{
  background-color: rgb(245,245,245);
}
.page{
  width: 100%;
  /*background: #1d7aae;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.page div{
  padding: 0 10px;
}


</style>