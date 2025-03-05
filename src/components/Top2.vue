<template>
  <!--        版心中间部分-->
  <div class="top2">
    <div class="left">
      <div class="left_top">
        <h2>精品线路</h2>
        <span class="left_top_2">
          <span v-for="item in line">
            <router-link to="/line">{{ item }}</router-link>
          </span>
        </span>
        <span class="left_top_3"><router-link to="/line">其他线路</router-link></span>
      </div>

      <div class="left_bottom">
        <div>
          <div class="module1" @click="showNews(value)">
            <h3><em>01 </em>万国建筑世遗之旅</h3>
            <span><a href="#">荟萃了上千座中西合璧、 风格各异的中外建筑</a></span>
          </div>
          <img src="@/assets/首页风景名胜插图.jpg" class="pri_img"/>
        </div>
        <div class="module2">
          <div v-for="item in infoShow" @click="showNews(item)">
            <div class="module2_top">
              <img :src="item.img" alt="">
              <div>
                <h3><em>{{ item.id }}</em> {{ item.title }}</h3>
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--top2最右边-->
    <div class="right">
      <img v-for="img in imgs" :src="img">
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top2",
  data() {
    return {
      line: ['诗意海南', '夜游海南', '海南文化遗产', '自驾游', '周边游'],
      infoShow: [
        {id: '02', title: '海上看海南', content: '海南犹如一张美丽的画卷展现在眼前，美不胜收', img: 'src/assets/首页地理环境插图.jpg'},
        {id: '03', title: '赏金典华屋', content: '设计博采中西文化之长， 堪称中西合璧之经典', img: 'src/assets/历史文化用图3.jpg'},
        {id: '04', title: '街巷寻味、体旅研学', content: '三大精品运动休闲旅游线路，带你玩转海南岛', img: 'src/assets/风景名胜骑楼老街素材1.jpg'},
      ],
      imgs: ['src/assets/风景名胜蜈支洲岛素材2.jpg', 'src/assets/历史文化用图1.jpg',],
      value:{id:'01', title:'万国建筑世遗之旅', img: 'src/assets/首页风景名胜插图.jpg'}
    }
  },
  methods:{
    showNews:function (val){
      this.$router.push({
        path: '/line',
        query:{ id: val.id, title: '线路', sub_title: val.title, img: val.img}
      })
      console.log(val)
    }
  }
}
</script>

<style scoped>

.top2{
  width: 100%;
  height: 430px;
  /*background: yellow;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;

}
.top2 .left{
  width: 925px;
  height: 427px;
  background: white;
  margin-right: 14px;
  box-sizing: border-box;

}
.top2 .left .left_top{
  height: 60px;
  background: rgb(0,98,165);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.top2 .left .left_top h2{
  color: white;
}
.top2 .left .left_top .left_top_2 span{
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 7px;
}
.top2 .left .left_top span span:nth-of-type(1){
  background-color: rgb(255,223,94);
}
.top2 .left .left_top span span:nth-of-type(2){
  background-color: rgb(96,189,254);
}
.top2 .left .left_top span span:nth-of-type(3){
  background-color: rgb(156,226,128);
}
.top2 .left .left_top span span:nth-of-type(4){
  background-color: rgb(69,210,193);
}
.top2 .left .left_top span span:nth-of-type(5){
  background-color: rgb(254,167,202);
}
.top2 .left .left_top span span:hover{
  background-color: rgb(0,57,96);
}
.top2 .left .left_top .left_top_3 a{
  color: white;
  font-style: italic;
  font-size: 14px;
}
.top2 .left .left_top .left_top_3 a:hover{
  color: rgb(5,137,222);
  font-style: italic;
  font-size: 14px;
}
.top2 .right{
  width: 290px;
  height: 427px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top2 .left .left_bottom{
  width: 288px;
  height: 365px;
  /*background: yellow;*/
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.top2 .left_bottom .module1{
  width: 288px;
  height: 125px;
  background-color: rgb(209,231,244);
  padding-top: 20px;
  padding-left: 15px;
  box-sizing: border-box;
}
.top2 .left_bottom em{
  font-family: Arial;
  font-size: 32px;
  font-weight: 700;
  color: #0061a4;
}
.top2 .left_bottom .module1 span a{
  font-size: 13px;
}.top2 .left_bottom .module1 span a:hover{
   color: rgb(5,137,222);
 }
.top2 .left .left_bottom .module2{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top2 .left .left_bottom .module2 .module2_top{
  width: 600px;
  height: 120px;
  /*background: yellow;*/
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  padding-left: 15px;
  border-bottom: 1px dashed rgb(168,168,168);
  margin-left: 20px;
}
.top2 .left .left_bottom .module2 .module2_top img{
  width: 160px;
  height: 100px;
  margin: 0 15px;
}
.top2 .left .left_bottom .module2 .module2_top div:hover{
  background: rgb(232, 231, 231);
}

.pri_img {
  width: 100%;
  height: 65%;
}
</style>