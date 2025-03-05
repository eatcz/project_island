<template>
    <DefaultHeader></DefaultHeader>
    <div class="container_h">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
      <el-breadcrumb-item>海口游玩线路：骑楼老街——海口钟楼——云洞图书馆——世纪大桥——海大南门夜市</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
  </div>
  <h1>游玩指南</h1><br>
  <!-- 外面包一个大容器 -->
  <div class="container">

    <img src="@/assets/热门路线图海口.jpg" alt="" class="img3">
    <p style="text-align: center;">
        海口热门旅游路线
    </p>

    <div class="imgList">
        <img src="@/assets/风景名胜骑楼老街素材3.jpg" alt="" class="img1">
    <img src="@/assets/热门路线海口钟楼.jpg" alt="" class="img2">
    </div>
    
    <p style="text-align: justify;">
        上午 : 参观南洋风格百年骑楼老街。漫步街头，仿若穿越时空，得胜沙路、新华南路、中山路、博爱路以及解放路一带盛载着老一代海口人的记忆，这里的建筑布满优雅细致的雕塑和洋派的装饰，向人们诉说着曾经的繁华。
    </p>
    <p style="text-align: justify;">
    中午 : 可以在骑楼老街附近品尝当地特色美食：海南椰子鸡、文昌鸡、海南粉等等
    </p>
    <div class="imgList">
        
        <img src="@/assets/热门路线云洞图书馆.jpg" alt="" class="img1">
        <img src="@/assets/热门路线世纪大桥.jpg" alt="" class="img1">
        <img src="@/assets/热门路线海大南门夜市.jpg" alt="" class="img1">
      </div>    
    <p style="text-align: justify;">
    下午 :  吃饱喝足便可步行4分钟到达海口钟楼，海口钟楼就在骑楼老街对面，建筑很有欧式风格，参观完钟楼过后便可花费7分钟打车前往云洞图书馆，白色的云洞图书馆外观、碧蓝的海水，傍晚时分还可以观赏到绝美的落日晚霞，再花点时间往外走走便可看到海口著名桥梁世纪大桥观看美丽的海口夜景，最后驱车17分钟前往海大南门夜市，许多特色小吃都可以在夜市买到。
    </p>

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


p {
  font-size: large;
  text-indent: 2em;
  line-height: 1.6;
}

.img1 {
    width: 25%;
    clear: both;
    display: block;
    margin: auto;
}
.imgList {
    display: flex;
    float: left;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.img2 {
    width: 35%;
    margin-right: 8%;
}
.img3 {
    width: 45%;
    clear: both;
    display: block;
    margin: auto;
}
</style>