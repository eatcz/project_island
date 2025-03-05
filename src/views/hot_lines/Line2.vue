<template>
    <DefaultHeader></DefaultHeader>
    <div class="container_h">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
      <el-breadcrumb-item>三亚游玩线路：三亚南山文化旅游区——天涯海角——鹿回头公园</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
  </div>
  <h1>游玩指南</h1><br>
  <!-- 外面包一个大容器 -->
  <div class="container">

    <img src="@/assets/热门路线三亚2.jpg" alt="" class="img2">
    <p style="text-align: center;">
        <!-- 三亚热门旅游路线 -->
    </p>

    <div class="con">
        <img src="@/assets/热门路线三亚南山文化旅游区.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        上午 : 驱车前往三亚南山文化旅游区，膜拜伫立于南海之滨的“三尊一体”108米海上观音像。
    </p>
    </div>

    <div class="con">
        <img src="@/assets/热门路线天涯海角.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        下午 : 游览有情人终成眷属的浪漫开端，天荒地老不变的爱情圣地——天涯海角。
    </p>
    </div>
    
    <div class="con">
        <img src="@/assets/热门路线鹿回头.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        晚上: 前往鹿回头公园登上山顶欣赏三亚的夜间美景。
    </p>
    </div>

    

  </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
export default {
  name: "Line",
  data(){
    return{
      title: '热门线路',
    }
  },
  components:{DefaultHeader}
}
</script>

<style scoped>
.container{
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
  margin-bottom: 50px;
}
.container_h{
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
}
.el-breadcrumb{
  padding: 15px 0;
  /*background-color: white;*/
  border-bottom: 1px solid rgb(153,153,153);
}

h1 {
  text-align: center;
  color: rgb(59, 83, 123);
}

.con {
    display: flex;
    margin-bottom: 5%;
    margin-left: 10px;
}

p {
  font-size: large;
  text-align: center;
  line-height: 1.6;
  margin-left: 10%;
  margin-top: 8%;
}

.img1 {
    width: 25%;
    
}
.imgList {
    display: flex;
    float: left;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.img2 {
    width: 45%;
    clear: both;
    display: block;
    margin: auto;
    margin-bottom: 10%;
}
</style>