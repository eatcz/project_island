<template>
  <div class="defaultHeader">
    <!-- <img src="@/assets/hainan_logo.jpg"> -->
    <!--        语言栏-->
    <div class="langue">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>{{ temperature }}°C {{ city }}</li>
      </ul>
    </div>

    <!--        导航条-->
    <div class="navigation">
      <ul>
        <li v-for="nav_item in navigation" :key="nav_item.id">
          <router-link :id="nav_item.id" :to="nav_item.path">{{ nav_item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
  <br>
</template>

<script>
import axios from "axios"

export default {
  name: "DefaultHeader",
  data() {
    return {
      navigation: [
        { id: 0, name: '首页', path: '/' },
        { id: 1, name: '城市简介', path: '/about' },
        // { id: 2, name: '风景名胜', path: '/attractions' },
        // { id: 3, name: '热门线路', path: '/line' },
        // { id: 4, name: '特色小吃', path: '/food' },
        // { id: 5, name: '历史文化', path: '/history' },
        // { id: 6, name: '地理环境', path: '/geo' },
        // { id: 7, name: '游客留言板', path: '/messages' },
        // { id: 8, name: '用户登录', path: '/user/userInfo' },
        { id: 8, name: '热门', path: '/hot' },
        { id: 9, name: '我的', path: '/center' },
        { id: 10, name: '用户登录', path: '/user/userInfo' },
      ],
      temperature: '',
      city: ''
    }
  },
  methods: {
    // 获取当前气温
    getWeather: function () {
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=04e0a4356d54a59f73d82e66f6555188&city=460100').then(res => {
        // console.log(res)
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
.defaultHeader {
  margin-top: 10px;

}

/* .defaultHeader img{
  float: left;
  margin-left: 100px;
  margin-top: 3px;
  width: 176.8px;
} */

.defaultHeader img {
  float: left;
  margin-left: 6%;
  width: 8.9%;
}

/*语言部分样式*/
.langue {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: #e2ebf4;
}

.langue>ul {
  display: flex;
  margin-right: 80px;
}

.langue>ul>li {
  width: 70px;
  height: 35px;
  background: #e2ebf4;
  /* float: left;
  margin-left: 5px; */
  /*去掉li标签的样式*/
  list-style: none;
}

.langue>ul>li:nth-of-type(5) {
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
.navigation {
  width: 100%;
  height: 70px;
  /* background-color: #2da1b9; */
  background-color: rgb(27, 118, 178);
}

/*消除a标签默认样式*/
a {
  /*取消下划线*/
  text-decoration: none;
  color: #101111;
}

.navigation>ul {
  /* margin-left: 310px; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* margin-left: 300px; */
  width: 100%;
  height: 70px;
  line-height: 70px;
}

.navigation>ul>li {
  /* height: 70px; */
  /* float: left; */
  list-style: none;
  padding: 0 15px;
  line-height: 70px;
}

.navigation>ul>li>a {
  color: white;
}

.navigation>ul>li>a:hover {
  color: rgb(125, 125, 125);
}
</style>