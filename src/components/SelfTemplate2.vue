<template>

  <div class="container">
    <div class="title">{{title}}</div>

    <div v-if="list!=null" class="ad-title" >
      <div :class="{active:currentIndex==index}" v-for="(item,index) in list" @click="radioChoose(index)">{{item}}</div>
    </div>

    <div class="content"
         v-for="(item,index) in content"
         @click="showDetail(item)"
         v-show="(label==null || item.label == label) && (((currentPage-1)*pageSize < index+1) && (index+1 <= currentPage*pageSize)) ">
      <img :src="item.img">
      <div v-if="item.date==null" class="txt">{{ item.txt }}</div>
      <div v-else class="txt">
        <div>{{item.txt}}</div>
        <div class="liveDate">{{item.date}}</div>
      </div>
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
import Page from "./Page.vue";
export default {
  name: "SelfTemplate2",
  data(){
    return{
      currentPage: 1, //初始页
      pageSize: 4, //    每页的数据
      total: 0,  //总数
      label: null,
      currentIndex: -1,
      nextDisable: false,
      preDisable: false

    }
  },
  props:['title', 'list', 'content'],    // 接受父级组件传递的参数
  methods:{
    radioChoose:function (val){
      this.label = this.list[val]
      this.currentIndex = val
      // console.log(this.label)
    },
    //查看页面详情
    showDetail:function (val){
      // console.log(val)
      this.$router.push({
        path: val.route,
        query:{
          id: val.id, title: this.title, sub_title: val.txt, img: val.img
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
  components:{Page},
  mounted() {
    this.total = this.content.length
    console.log(this.content)
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
  background-color: #00799E;
  color: white;
  line-height: 80px;  
  padding-left: 15px;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
}
.ad-title{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.ad-title div{
  padding: 5px 9px;
  margin: 10px 10px;
  color: white;
  background-color: rgb(37,167,255);
  font-size: 15px;
  border-radius: 5px;
}
.ad-title .active{
  padding: 5px 9px;
  margin: 10px 10px;
  color: white;
  background-color: rgb(40, 153, 229);
  font-size: 15px;
  border-radius: 5px;
}
.content{
  width: 100%;
  padding: 30px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(225,225,225);
  margin-top: 5px;
  display: flex;

}
.content img{
  width: 160px;
  height: 140px;
  object-fit: fill;
  float: left;
}
.content .txt{
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  color: rgb(102,102,102);
  width: 100%;
  float: right;
  /*background-color: aqua;*/
}
.liveDate{
  margin-top: 15px;
  font-size: 15px;
  color: rgb(145, 145, 145);
  font-weight: 100;
}
.content .txt:hover{
  color: black;
}
.content a:hover{
  background-color: rgb(245,245,245);
}
:deep .el-pagination button, .el-pagination span:not([class*=suffix]) {
  line-height: 39px;
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