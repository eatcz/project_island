<template>
  <!--版心第四部分 --热门推荐-->
  <div class="top4">
    <h1 class="guide">热门推荐</h1>
    <div class="img_item">
      <div v-for="item in list1" @click="showNews(item)">
        <span>{{ item.title }}</span>
        <img :src="item.img">
      </div>
    </div>
    <div class="img_item1">
      <div v-for="item in list2" @click="showNews(item)">
        <span>{{ item.title }}</span>
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top43",
  data(){
    return{
      list1:[
        {id: '0', title: '海南标志建筑', img: 'src/assets/城市介绍用图66.jpg', dest: 'line'},
        {id: '1', title: '南海观音', img: 'src/assets/热门路线三亚南山文化旅游区1.jpg', dest: 'line2'},
        {id: '2',title: '蜈支洲岛', img: 'src/assets/风景名胜蜈支洲岛素材2.jpg', dest: 'line3'},
        //{id: '3',title: '梦幻海岸', img: 'src/assets/风景名胜蜈支洲岛素材2.jpg'},
      ],
      list2:[
        {id: '4',title: '鹿回头', img: 'src/assets/热门路线鹿回头.jpg', dest: 'line2'},
        {id: '5',title: '海大南门夜市', img: 'src/assets/热门路线海大南门夜市.jpg', dest: 'line1'},
        {id: '6',title: '世纪大桥', img: 'src/assets/热门路线世纪大桥.jpg', dest: 'line1'},
        {id: '7',title: '大东海', img: 'src/assets/热门路线大东海.jpg', dest: 'line3'},
        {id: '8',title: '海花岛', img: 'src/assets/风景名胜海花岛素材3.jpg', dest: 'line'},
      ],
    }
  },
  methods:{
    showNews:function (val){
      console.log(val)
      this.$router.push({
        path: val.dest,
        query:{id: val.id, title: '景区', sub_title: val.title, img: val.img}
      })
    }
  }
}
</script>

<style scoped>
.top4>.img_item{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top4>.img_item>div{
  position: relative;
}
.top4>.img_item>div>span{
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 200px;
  left: 15px;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;
}
.top4>.img_item>div>img{
  margin: 0 8px;
  height: 230px;
}
.top4>.img_item>div>img:hover{
  filter: alpha(opacity=30);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.top4>.img_item1>div>img:hover{
  filter: alpha(opacity=30);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.top4>.img_item1{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top4>.img_item1>div{
  position: relative;
}
.top4>.img_item1>div>span{
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 210px;
  left: 15px;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;
}
.top4>.img_item1>div>img{
  width: 230px;
  height: 230px;
  margin: 8px 8px;
}
</style>