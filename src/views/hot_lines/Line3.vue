<template>
    <DefaultHeader></DefaultHeader>
    <div class="container_h">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
      <el-breadcrumb-item>三亚游玩线路：亚蜈支洲岛 → 大东海 → 丝绸之路</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
  </div>
  <h1>游玩指南</h1><br>
  <!-- 外面包一个大容器 -->
  <div class="container">

    <img src="@/assets/热门路线三亚.jpg" alt="" class="img2">
    <p style="text-align: center;">
        <!-- 三亚热门旅游路线 -->
    </p>

    <div class="con">
        <img src="@/assets/热门路线蜈支洲岛.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        上午：游玩蜈支洲岛，蜈支洲岛古称"古崎洲"，又名情人岛。这里海水能见度高，水下世界绚丽多彩，是我国最重要的潜水基地之一。同时，还是进行摩托艇、香蕉船、水上降落伞等水上活动的好地方。如果仅是来岛上体验水上活动，建议早点上岛，且不必在岛上住宿。
    </p>
    </div>

    <div class="con">
        <img src="@/assets/热门路线大东海.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        中午：前往大东海，大东海位于海南三亚市市区的榆林港和鹿回头之间，海岸线长2.9公里，"水暖沙白滩平"早已使大东海斐声海内外。大东海三面环山，一面大海，一排排翠绿椰林环抱沙滩，蓝天、碧海、青山、绿椰、白沙滩独特之美博得海内外游客的赞叹。全天开放，建议游玩时间2~3小时。
    </p>
    </div>
    
    <div class="con">
        <img src="@/assets/历史文化用图1.jpg" alt="" class="img1">
    <p style="text-align: justify;">
        下午：驱车前往丝绸之路，进景区后，演绎未开始之前，外场有精彩的海豚表演，和古筝表演。景区营业时间为18：30-21：00，乘坐31路至景区下车即可。演出门票随订随取，最晚预订时间为18：00，最晚取票时间为18：30。
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
  margin-top: 3%;
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
    width: 60%;
    clear: both;
    display: block;
    margin: auto;
    margin-bottom: 10%;
}
</style>