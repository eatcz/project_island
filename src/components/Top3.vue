<template>
  <!--        版心第三部分-->
  <div class="top3">
    <h1 class="guide">旅游向导</h1>
    <div class="guide_item">
      <div class="item" v-for="item1 in travelList">
        <router-link :to="item1.path">
          <span>{{item1.title}}</span>
          <img :src="item1.img" class="img_adjust">
          <ul>
            <li v-for="item2 in item1.subTitle">
              <router-link to="/">{{item2}}</router-link>
            </li>
          </ul>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top3",
  data(){
    return{
      travelList:[
        {title: '景区', img: 'src/assets/风景名胜南海观音素材1.jpg', subTitle:['5A级景区', '4A级景区', '三亚风景', '主题乐园', '文博科教', '遗产古迹'], path: '/attractions'},
        {title: '', img: 'src/assets/海南全景点路线图.jpg', subTitle:['骑楼老街', '南海观音', '夜游三亚', '海口钟楼', '海南经典遗产'], path: '/line'},
        {title: '美食', img: 'src/assets/特色小吃椰奶清补凉素材2.jpg', subTitle:['地道美食', '抱罗粉', '清补凉', '陵水酸粉', '椰子鸡'], path: '/food'},
        {title: '地理', img: 'src/assets/风景名胜海花岛素材3.jpg', subTitle:['位置境域', '地形地貌', '气候环境', '地理环境', '海岸线'], path: '/geo'},
        {title: '历史', img: 'src/assets/风景名胜骑楼老街素材3.jpg', subTitle:['历史文化', '人文古迹', '海上丝绸', '文化瑰宝', '自由贸易'], path: '/history'},
      ]
    }
  }
}
</script>

<style scoped>
.top3{
  margin-top: 20px;
}
.top3>.guide_item{
  width: 100%;
  height: 360px;
  /*background: yellow;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top3>.guide_item>.item{
  width: 230px;
  height: 360px;
  position: relative;
  margin: 0px 8px;
}
.top3>.guide_item>.item> a span{
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
  font-weight: 350;
}
.img_adjust {
  width: 230px;
  height: 300px;
}
.top3>.guide_item>.item> a ul{
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: white;
  box-sizing: border-box;
  padding-top: 5px;
  padding-left: 15px;
  margin-top: -8px;
}
.top3>.guide_item>.item a ul>li{
  list-style: none;
  width: 90px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 20px;
  background: url("@/assets/tg_dot.png") no-repeat 1px 10px ;
}
.top3>.guide_item>.item a ul>li:hover{
  color: rgb(59,160,230);
}

</style>