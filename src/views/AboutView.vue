<template>
  <!-- 这个是城市简介页面 -->
  <div>
    <!-- <DefaultHeader></DefaultHeader> -->
    <div class="container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
        <el-breadcrumb-item>正文</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content" v-loading="loading">
        <h1>{{ sub_title }}</h1>
        <div class="resource">来源：{{ source }}</div>
        <img :src="img">
        <div v-html="text"></div>
      </div>
    </div>

    <div class="container">
      <div style="text-align: center;">
        <!-- <h1>海南简介</h1> -->
        <p style="text-align: justify;">
          海南省，（HainanProvince）简称“琼”，是中华人民共和国最南端的省级行政区，省会海口市；北以琼州海峡与广东省划界，西隔北部湾与越南相对，东面和南面在南海中与菲律宾、文莱、印度尼西亚和马来西亚为邻。陆地总面积3.54万平方千米，海域总面积约200万平方千米。
          截至2023年年底，海南省辖4个地级市，5个县级市、4个县、6个自治县、市辖区10个。常住人口1043万人。海南主要使用的方言有海南话、黎话、临高话等十种。
        </p>
        <div class="container1">
          <div class="left">
            <img src="@/assets/城市简介用图1.jpg" alt="" width="250px">
          </div>
          <div class="right">
            <h3 style="text-align: center;">名称由来</h3>
            <p style="text-align: justify;">
              海南省属于热带季风海洋性气候。海南岛四周低平，中间高耸，呈穹隆山地形，以五指山、鹦哥岭为隆起核心，向外围逐级下降，由山地、丘陵、台地、平原构成环形层状地貌，梯级结构明显。海南省早在6000年前就有人类活动。
              秦汉时期设立崖州，隋大业三年（公元607年），改崖州为崖郡。元惠宗至正末年，海南改隶广西行中书省。清初沿袭明置。光绪三十一年（1905年）四月，升崖州为直隶州，改万州为万县。1933年，设琼崖绥靖委员会公署于海口。1952年8月，设立海南行政区。1988年4月13日，设立海南省。
            </p>
          </div>

        </div>
        <h3 style="text-align: center;">产业发展</h3>
        <p style="text-align: justify;">
          海南省四大主导产业为：旅游业、现代服务业、高新技术产业和热带特色高效农业，四大主导产业对海南经济增长的贡献率超过六成。截至2023年，海南省地区生产总值7551.18亿元，第一产业增长4.6%；第二产业增长10.6%；第三产业增长10.3%。截至2023年10月，海南省5A级景区为6家。
          截至2024年，海南省共有国家级非遗项目32项。不可移动文物4274处，其中全国重点文物保护单位35处。旅游政策福利：
        </p>
        <div class="p_indent">
          <div>
            <ul>
              <li>离岛免税政策：离岛旅客每年每人免税购物额度为 10 万元，不限次，且扩大了免税商品种类，增加了电子消费产品等，并放宽了部分商品的单次购买数量限制.</li>
              <li>人员进出自由便利政策：优化升级 59 国人员入境海南免签政策，扩大入境免签事由，延长入境停留时间.</li>
              <li>港澳地区外国旅游团入境政策：国家移民管理局实施港澳地区外国旅游团入境海南 144
                小时免签政策，适用对象为所有与我国建交国家的公民，持普通护照从中国香港及澳门地区组团，经边检机关查验准许即可免签入境海南停留不超过 144 小时.</li>
            </ul>
          </div>
        </div>
        <p style="text-align: justify;">
          为了满足不同游客的旅游需求，海南目前正在构建构建十大产品体系，丰富旅游产品供给。一是打造海洋旅游新标杆。加快推动海棠湾、亚龙湾、清水湾、石梅湾、神州半岛等18个精品海湾和亚特兰蒂斯、海花岛、海洋主题公园3个滨海旅游综合体建设，进展顺利。二是大力发展康养旅游。积极推进以博鳌乐城医疗旅游先行区为典型的医疗机构建设，加快开发
          6大精品温泉旅游产业聚集区。三是创新发展文体旅游。打造了海南国际旅游岛欢乐节、海南黎苗族传统节日“三月三”、冼夫人文化节、环海南岛国际大帆船赛、环海南岛国际公路自行车赛等特色民俗文化节庆和国际赛事品牌；四是积极培育会展旅游。成立了省会议及奖励旅游行业协会，成功举办了海南世界休闲旅游博览会、海南国际旅游美食博览会等。五是加快发展乡村旅游。孕育出“奔格内”、“北仍村”等乡村旅游品牌供游客们去亲历体验。六是稳步开发森林生态旅游。依托五指山、吊罗山、尖峰岭、霸王岭等中国最好的热带雨林资源，构建森林观光、度假养生、运动探险、野生动物观赏等森林生态旅游产品体系。七是发展特色城镇旅游。精心打造一批集观光、休闲、度假、养生、购物等功能于一体的特色旅游城镇和特色景观旅游名镇；八是培育壮大购物旅游。海南旅游购物，不仅可以享受离境免税、退税政策，还可以在遍布全岛的海南礼物特产商店，购买各式各样的海南本土旅游商品等。九是探索发展产业旅游。做大航天旅游、科技旅游和环岛高铁旅游等。十是大力发展专项旅游。婚庆旅游已成为游客最喜爱的海南旅游产品；关于加快发展自驾车旅居车旅游，规划建设一批国际化、标准化、生态化的汽车旅馆和自驾车房车露营基地；低空飞行旅游产品形态日益丰富；大力推进红色旅游基础设施建设，建设一批红色文化内涵丰富的经典景区等。
        </p>
      </div>
      <div class="images">
        <img src="@/assets/城市介绍用图2.jpg" alt="" width="30%" class="img_list">
        <img src="@/assets/城市介绍用图3.jpg" alt="" width="35%" class="img_list">
        <img src="@/assets/城市介绍用图4.jpg" alt="" width="30%" class="img_list">
      </div>
    </div>
    <!-- <HomeFooter></HomeFooter> -->
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      title: '城市简介',
      sub_title: '海南简介',
      city_title: '海南简介',
      list: '',
      content: '',
      source: '海南省文化和旅游局',
      img: 'src/assets/城市介绍用图6.jpg',
    }
  },
  mounted() {
    console.log(this.$route.params)
  },
}
</script>

<style scoped>
.container {
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
}

.el-breadcrumb {
  padding: 15px 0;
  /*background-color: white;*/
  border-bottom: 1px solid rgb(153, 153, 153);
}

.content {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content h1 {
  margin: 10px 0;
}

.content .resource {
  margin: 10px 0;
}

.content img {
  margin: 10px 0;
}

.container h3 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #d82626;
}

.container p {
  font-size: large;
  text-indent: 2em;
  line-height: 1.6;
}

.p_indent {
  font-size: large;
  margin-left: 30px;
  line-height: 2;
}

.container1 {
  display: flex;
  margin-top: 35px;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-left: 25px;
}

.images {
  display: flex;
}

.img_list {
  float: left;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
