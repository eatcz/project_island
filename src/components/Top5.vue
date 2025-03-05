<template>
  <!--        版心第五部分 --游记攻略-->
  <div class="top5">
    <h1 class="guide">游记攻略</h1>
    <div class="sub_title">{{saying}}</div>
    <div class="more"><router-link to="/line">MORE>></router-link></div>
    <div class="box">
      <div v-for="item in list" @click="showNews(item)">
        <div class="circle">
          <img :src="item.img" alt="">
          <div class="word">
            <div class="word_1">
              {{ item.title }}
            </div>
            <div class="pos">{{ item.pos }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top5",
  data(){
    return{
      saying: '独行或同游，聪明的人与你在一起',
      list: [
        {id: '0', title: '文艺打卡胜地', pos: '海口', img: 'src/assets/风景名胜骑楼老街素材1.jpg', dest: 'line'},
        {id: '1', title: '超梦幻夜景，美醉了', pos: '三亚', img: 'src/assets/首页滚动图片6.jpg', dest: 'line'},
        {id: '2', title: '海口百年钟楼', pos: '海口', img: 'src/assets/热门路线海口钟楼.jpg', dest: 'line'},
        {id: '3', title: '遇见了“生态之美”', pos: '儋州', img: 'src/assets/风景名胜海花岛素材2.jpg', dest: 'line'},
      ]
    }
  },
  methods:{
    showNews:function (val){
      this.$router.push({
        path: val.dest,
        query: {id: val.id, title: '旅游贴士', sub_title: val.title, img: val.img}
      })
    }
  }
}
</script>

<style scoped>

/*版心第五部分*/
.top5{
  width: 100%;
  /*background: yellow;*/
}

.top5>.sub_title{
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  color: rgb(150, 155, 159);
}
.top5>.more{
  margin: 5px auto;
  text-align: center;
  font-size: 18px;
  font-style: italic;
}
.top5>.more>div{
  color: #1d7aae;
}
.top5>.box>div>.circle{
  width: 285px;
  height: 285px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin: 15px 15px;
}
.top5>.box>div>.circle>img{
  width: 100%;
  height: 100%;
}
.top5>.box>div>.circle>.word{
  height: 80px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background: white;
  position: absolute;
  bottom: 0px;
}
.top5>.box>div>.circle:hover{
  color: rgb(51,137,215);
}
.top5>.box>div>.circle>.word>.word_1{
  height: 45px;
  line-height: 45px;
}
.top5>.box>div>.circle>.word>.pos{
  height: 30px;
  line-height: 30px;
  color: rgb(132, 136, 140);
  background: url("@/assets/strategy_pos.png") no-repeat 105px 4px;
  margin-left: 5px;
}
.top5>.box{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 60px;
}
</style>