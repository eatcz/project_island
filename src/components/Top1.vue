<template>
  <!--        版心最上面部分-->
  <div class="top1">
    <div class="left">
      <h2>海南旅游</h2>
      <ul>
        <li v-for="item in travel"><router-link :to="item.path">{{ item.name }}</router-link></li>
      </ul>
    </div>
    <div class="center"></div>
    <div class="right">
      <div class="news">
        <span class="news_left">最新资讯</span>
        <span class="news_right"><a href='https://www.hinews.cn/news/hainan' target="_blank">更多资讯</a></span>
      </div>
      <ul>
        <!-- 这里文字放超链接，直接导过去，顺便练习下超链接的使用 -->
        <li v-for="item in moreInfo" @click="showNews(item)">
          <a :href='item.ref' target="_blank">{{ item.text }}</a>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top1",
  data() {
    return {
      travel: [
        { name: '城市简介', path: '/about' },
        { name: '风景名胜', path: '/attractions' },
        { name: '旅游攻略', path: '/line' },
        { name: '特色小吃', path: '/food' },
        { name: '历史文化', path: '/history' },
        { name: '地理环境', path: '/geo' },
      ],
      moreInfo: [
        { id: 0, text: '两会好声音 | 省政协委员马波：建议科学规划海南道路绿化树种 推动城市绿化事业健康发展', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254851.shtml' },
        { id: 1, text: '过海货车 海口新海港、秀英港需提前不超过5小时抵达港口', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254858.shtml' },
        { id: 2, text: '三亚市文化馆全民艺术普及联盟迎春晚会上演', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254824.shtml' },
        { id: 3, text: '2025年“嗨翻三亚 当燃！”艺术嘉年华活动启幕', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254823.shtml' },
        { id: 4, text: '两会观察 | 自贸港封关运作决胜决战之年怎么干？ 厅局市县都在写答卷', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254821.shtml' },
        { id: 5, text: '海南2025年10项省级民生实事项目票决出炉', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254825.shtml' },
        { id: 6, text: '冬游海南 | 琼海世界热带水果之窗“提档升级”迎客来', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254796.shtml' },
        { id: 7, text: '“暖冬游”火热！海口美兰机场单日客流量突破10万+', ref: 'https://www.hinews.cn/news/system/2025/01/18/033254797.shtml' }
      ]
    }
  },
  methods: {
    showNews: function (val) {
      // console.log(val)
      /* this.$router.push({
        path: '/news',
        query:{id: val.id, title: '旅游资讯',sub_title: val.text}
      }) */
    }
  }
}
</script>

<style scoped>
.container>.top1 {
  width: 100%;
  height: 320px;
  /*background: white;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container>.top1>.left {
  width: 220px;
  height: 100%;
  background-color: rgb(0, 65, 108);
  /*固定大小 不会被padding撑大*/
  box-sizing: border-box;
  padding: 0 15px;
}

.container>.top1>.left>ul {
  list-style: none;
  padding-top: 10px;
}

.container>.top1>.left>ul>li {
  line-height: 40px;
  padding-left: 15px;
  background: url("@/assets/ql_dot.png") no-repeat 0 17px;
}

.container>.top1>.left>ul>li:hover {
  color: rgb(125, 125, 125);
}

.container>.top1>.left>ul>li>a {
  color: white;
}

.container>.top1>.left>h2 {
  width: 100%;
  color: rgb(125, 199, 250);
  padding: 15px 0;
  border-bottom: 1px solid rgb(125, 199, 250);
}

.container .top1 .left ul li a:hover {
  color: rgb(103, 191, 252);
}

.container>.top1>.center {
  width: 690px;
  height: 100%;
  margin: 0 15px;
  background: url("@/assets/热门路线天涯海角.jpg");
  background-size: contain;
}

.container>.top1>.right {
  width: 290px;
  height: 100%;
  /*background-color: cornflowerblue;*/
  box-sizing: border-box;
}

.top1 .right .news {
  /*background: yellow;*/
  height: 35px;
  width: 100%;
  border-bottom: 2px solid rgb(125, 199, 250);
}

.top1 .right .news .news_left {
  font-weight: 1000;
  border-bottom: 2px solid rgb(29, 122, 174);
  padding-bottom: 7px;
  line-height: 35px;
}

.top1 .right .news .news_right {
  float: right;
  line-height: 35px;
  /*斜体字*/
  font-style: italic;
  font-size: 15px;
}

.top1 .right .news .news_right:hover a {
  color: rgb(103, 191, 252);
}

.top1 .right ul {
  list-style: none;
  background: white;
  /*height: 100%;*/
  height: 283px;
}

.top1 .right ul li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 35px;
  font-size: 15px;
  padding-left: 15px;
  background: url("/img/sm_arrow.png") no-repeat 4px 15px;
}

.top1 .right ul li:hover {
  color: rgb(103, 191, 252);
}
</style>