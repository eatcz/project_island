<template>

  <DefaultHeader></DefaultHeader>

  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content" v-loading="loading">
      <h1>{{ sub_title }}</h1>
      <div class="resource">来源：{{ source }}</div>
      <div>{{date}}</div>
      <img :src="img">
      <div v-html="text"></div>
    </div>
  </div>

  <HomeFooter></HomeFooter>
</template>

<script>
import DefaultHeader from "@/components/common_page/DefaultHeader.vue";
import HomeFooter from "@/components/home_component/HomeFooter.vue";
export default {
  name: "News",
  data(){
    return{
      loading: true,
      title: '',
      sub_title: '',
      source: '',
      img: '/img/W020230216283907639960.jpg',
      text: '厦门网讯(厦门日报记者 朱道衡)<br><br>冷空气不断补充兵力南下，暖湿气流抵挡不住，于是昨天鹭岛天气晴好，日头公露出笑脸。只是在冷空气的打压下，夜晨最低气温继续下降，军营村仅3.9℃。气象部门预测，今明两天我市夜晨寒意袭人，早出晚归的市民要多穿些衣物，好在天气持续晴好，明天开始气温逐日回升。<br> <br>昨天我市被冷空气掌控，东北风劲吹，夜晨市气象台本站最低气温为9.7℃，比前天降了1.5℃，城区低温也普遍在10℃上下，白天即便有阳光抚慰，气温欲振乏力，城区最高气温大概在15℃至16℃，也比前天略低。<br><br>闽南民谚云“三日风，三日霜，三日日头公”，这句话形象地诠释了鹭岛强冷空气大兵压境时的天气特点——先是北风凛冽，呼啸不息，继而气温骤降，寒意迫人，最后晴日高悬，白天气温逐日回升。<br><br>今明两天，我市正处在“三日霜”的状态中，天气为晴到多云，夜晨寒意凛冽，城区最低气温只有8℃，岛外靠山地区跌至4℃至7℃，高海拔山区仅2℃至4℃，局部有霜或霜冻，加之北风劲吹，体感温度更低. <br><br>好消息是，明天上午开始，本轮冷空气影响逐步减弱，同时阳光持续发力，我市气温开始逐渐回升，预计19日，城区最高气温将攀高到25℃左右，夜晨最低气温也升高到15℃上下。数据来源:厦门气象微信公众号<br><br>【海洋预报】<br><br>■ 高潮时:08时23分和20时02分<br><br>■ 低潮时:01时34分和14时06分<br><br>■ 表层水温:14.0℃至16.5℃<br><br>■ 厦门岛南部海域浪高:1.3米 至2.0米 中浪<br><br>厦门海洋环境预报台发布',
      id: '',
      date: 'xx-xx-xx'
    }
  },
  components:{DefaultHeader, HomeFooter},
  mounted() {
    this.loading = false
    console.log(this.$route.query)
    let my_query = this.$route.query
    this.title = my_query.title
    this.sub_title = my_query.sub_title
    this.source = my_query.sub_title
    this.img = my_query.img
    // this.text = '正文：根据id自动获取请求'
    this.id = my_query.id
    this.date = my_query.date
  }
}
</script>

<style scoped>
.container{
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
}
.el-breadcrumb{
  padding: 15px 0;
  /*background-color: white;*/
  border-bottom: 1px solid rgb(153,153,153);
}
.content{
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content h1{
  margin: 10px 0;
}
.content .resource{
  margin: 10px 0;
}
.content img{
  margin: 10px 0;
}
.content p{
  padding-bottom: 20px;
}
</style>