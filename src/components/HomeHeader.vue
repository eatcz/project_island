<template>
  <!--    头部部分-->
  <div class="header">

    <img src="@/assets/hainan_logo.jpg">
    <!--    语言栏-->
    <div class="langue">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>{{ temperature }}°C {{city}}</li>
      </ul>
    </div>

    <!--        导航条-->
    <div class="navigation">
      <ul>
        <li v-for="nav_item in navigation">
          <router-link :id="nav_item.id" :to="nav_item.path">{{nav_item.name}}</router-link>
        </li>
      </ul>

      <!-- <div class="banner">
        <p>海南欢迎您</p>
      </div> -->

      <div class="block text-center">
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="(image, index) in imageList" :key="index">
            <img :src="image" alt="carousel image" style="width: 100%; height: 350px;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeHeader",
  data(){
    return {
      navigation: [
        {id: 0, name: '首页', path: '/'},
        {id: 1, name: '城市简介', path: '/about'},
        {id: 2, name: '风景名胜', path: '/attractions'},
        {id: 3, name: '热门线路', path: '/line'},
        {id: 4, name: '特色小吃', path: '/food'},
        {id: 5, name: '历史文化', path: '/history'},
        {id: 6, name: '地理环境', path: '/geo'},
        {id: 7, name: '游客留言板', path: '/messages'},
        {id: 8, name: '用户登录', path: '/user/userInfo'},
      ],
      temperature: '',
      city: '',
      imageList: [
        'src/assets/首页滚动图片1.webp',
        'src/assets/首页滚动图片2.jpg',
        'src/assets/首页滚动图片3.jpg',
        'src/assets/首页滚动图片4.jpg',
        'src/assets/首页滚动图片5.jpg',
        'src/assets/首页滚动图片6.jpg',
      ]
    }
  },
  methods:{
    // 获取当前气温
    getWeather:function (){
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=04e0a4356d54a59f73d82e66f6555188&city=460100').then(res =>{
        console.log(res)
        this.temperature = res.data.lives[0].temperature
        this.city = res.data.lives[0].city
      })
    }
  },
  created() {
    this.getWeather()
  }
}
</script>

<style scoped>
/*头部*/
.header{
  margin-top: 10px;
  height: 445px;
}
.header img{
  float: left;
  margin-left: 6%;
  width: 8.9%;
}

/*语言部分样式*/
.langue{
  width: 100%;
  height: 35px;
  background-color: #e2ebf4;
}
.langue>ul{
  float: right;
  /*right: 470px;*/
  margin-right: 80px;
}
.langue>ul>li{
  width: 70px;
  height: 35px;
  background: #e2ebf4;
  float: left;
  margin-left: 5px;
  /*去掉li标签的样式*/
  list-style: none;
}

.langue>ul>li:nth-of-type(5){
  margin-left: 15px;
  padding-left: 30px;
  font-size: 12px;
  /*文字居中效果: line-height等于容器高度*/
  line-height: 35px;
  background: url("@/assets/cloudy.png") no-repeat;
  background-color: #3c87c7;
  color: white;
}
/*导航条*/
.navigation{
  width: 100%;
  height: 70px;
  background-color: rgb(27, 118, 178);
}
.navigation>ul{
  margin-left: 310px;
  height: 70px;
}
.navigation>ul>li{
  height: 70px;
  float: left;
  list-style: none;
  padding: 0 15px;
  line-height: 70px;
}
.navigation>ul>li>a{
  color: white;
}
.navigation>ul>li>a:hover{
  color: rgb(125, 125, 125);
}

.banner>p{
  color: white;
  font-size: 50px;
  margin-left: 1000px;
  margin-top: 35px;
  /*padding-top: 35px;*/
  /*border: 1px solid red;*/
}



.el-carousel__item:nth-child(2n) {
  background-color: #ffffff00;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff00;
}

</style>