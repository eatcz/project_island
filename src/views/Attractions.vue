<template>
  <!--  <h1>风景名胜</h1>-->
  <!-- <DefaultHeader/> -->
  <div class="container_h">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
  </div>
  <h1>海南风景名胜</h1><br>
  <!-- 外面包一个大容器 -->
  <div class="container">
    <!-- 里面分为左右两部分，左边是标题和文字，右边是图片 -->
    <div class="container_head">
      <div class="head-left">
        <img src="@/assets/海南全景点路线图.jpg" alt="" width="45%" class="head-img">
      </div>
      <div class="head-right">
        <!-- <h2>海南旅游景点地图以及著名景点</h2> -->
      </div>
    </div>

    <div class="container_inner">
      <div class="left">
        <h2>南海观音</h2>
        <p style="text-align: justify;">
          三亚108米南海观音，位于海南省三亚市崖州区海棠湾河西，是世界上最高的观音像之一。观音像高达108米，是中国第一座镶嵌纯金属质地并设有唐卡飞旋佛经库的观音像。南海观音以南海为背景，形象慈祥，双手持珍珠手卷千手千眼观音，身穿宝蓝色袍裙，头戴五菱冠。整体形象庄重肃穆，给人以神圣庄严之感。
          观音像底座为佛教艺术建筑，底层为落地式法堂，二层为摩尼堂，第三层为普门堂。法堂内共有108米的螺旋阶梯，穿越各层，可供游客参拜观音像。
          观音像设计精美，采用纳米技术，使其能抵御风沙的侵蚀，同时光滑亮丽，犹如一尊巨大的宝塔。观音像的面料和黄金装饰丰富多样，经过精细雕刻和打磨，展现出精湛的工艺和美学价值。观音像所在的位置，可俯瞰整个海棠湾，给人一种壮丽的美景。
        </p>
      </div>
      <div class="right">
        <img src="@/assets/风景名胜南海观音素材1.jpg" alt="">
      </div>
    </div>

    <div class="container_inner">
      <div class="left">
        <h2>海花岛</h2>
        <p style="text-align: justify;">
          海花岛，位于海南省儋州市滨海新区第四组团
          ，地处海南西部、排浦港与洋浦港之间的洋浦湾区域，南起排浦镇，北至白马井镇，距离海岸约600米，总跨度约6.8千米。用地规划范围总面积为7.824平方千米。2009年~2013年，海花岛调研规划报批阶段，2020年，海花岛28大业态的主体工程陆续完工；
          2021年元旦，海花岛已启动试运营；同年年底，海花岛28大业态全部开放。
          海花岛是一座人工岛，由三个独立的离岸式岛屿组成。一号岛主导功能为旅游度假、商业会展、酒店会议、娱乐休闲、餐饮和海洋运动休闲，为国际级的大型综合旅游服务区，二号岛和三号岛主导功能为居住区。
          2021年6月30日，海花岛被评为“2020最佳文旅项目”。2022年，海花岛荣获海南省2020年~2021年“特色研学旅游目的地奖”“网红旅游目的地奖”两大奖项。
          2024年4月20日，儋州海花岛水上王国盛大开园。
        </p>
      </div>
      <div class="right">
        <img src="@/assets/风景名胜海花岛素材3.jpg" alt="">
      </div>
    </div>

    <div class="container_inner">
      <div class="left">
        <h2>海口骑楼老街</h2>
        <p style="text-align: justify;">
          海口骑楼老街是海南省海口市一处具有独特建筑风格和丰富历史文化的老街区。其建筑特色主要体现在骑楼建筑上，这是一种融合了中国传统建筑和欧洲建筑风格的独特形式。
          骑楼的外观质朴，柱廊并未做过多装饰，以凸显沿街店面牌匾。而二层以上则装饰繁复，窗户形态各异，彩色玻璃拼接成绚丽的图案，为室内投射出五彩缤纷的光线。
          漫步在青石板路上，可以欣赏到骑楼建筑群的独特魅力。从建筑的外观到内部装饰，都充满了艺术气息，体现了中西方文化的交融；骑楼老街见证了海口市的历史变迁，是海口市由无到有，发展成为一个繁荣的沿海大都市的缩影。游览老街，可以深入了解海口市的历史文化，感受这座城市的独特韵味。在老街上，可以品尝到各种地道的海南美食，如海南鸡饭、椰子鸡等。这些美食不仅美味可口，还代表了海南的饮食文化。
        </p>
      </div>
      <div class="right">
        <img src="@/assets/风景名胜骑楼老街素材3.jpg" alt="">
      </div>
    </div>

    <div class="container_inner">
      <div class="left">
        <h2>蜈支洲岛</h2>
        <p style="text-align: justify;">
          蜈支洲岛坐落在海南省三亚市北部的海棠湾内，北面与南湾猴岛遥遥相对，南邻美誉天下第一湾的亚龙湾。蜈支洲岛距海岸线2.7公里，方圆1.48平方公里，呈不规则的蝴蝶状，东西长1400米，南北宽1100米。距三亚市30公里，凤凰机场38公里，紧靠海口至三亚的高速公路，位置优越，交通便利。蜈支洲岛是海南岛周围为数不多的有淡水资源和丰富植被的小岛，有二千多种植物，种类繁多。
          蜈支洲岛地处热带，属于热带海洋性气候，日照时间长，平均气温较高，全年温差小，四季不分明。蜈支洲岛的地貌类型丰富，包括悬崖、峭壁、沙滩、沙咀、海蚀崖等，海内有岩礁平台。
          由于蜈支洲岛的地理位置偏僻，在古代人迹罕至，清代光绪时期这里建有名为“海上涵三观”的庵堂，以供奉仓颉。清朝衰败后，庵堂逐渐衰败，后被当地渔人改建为妈祖庙。
          蜈支洲岛上不仅有包括情人桥、金龟探海、观日岩、观海长廊等景观，还有潜水、摩托艇、风洞等30余种海陆运动项目，打造了海陆空立体化玩海方式。此外，在离海岸线500~1000米的地方，还建有中国第一个热带海洋牧场，已形成了良好的海洋生物圈，如原生的珊瑚群、海葵、海参、大型石斑鱼、鹦嘴鱼、海鳗等各种海洋生物
        </p>
      </div>
      <div class="right">
        <img src="@/assets/风景名胜蜈支洲岛素材2.jpg" alt="" height="80%">
      </div>
    </div>

    <div class="container_inner">
      <div class="left">
        <h2>五指山</h2>
        <p style="text-align: justify;">
          五指山，作为海南岛的第一高山，被誉为“海南屋脊”，是海南的象征。其名称源于山体的独特形态，南北长40余千米，东西宽30千米，峰峦起伏成锯齿状，形似人的五指。其中，五指山二峰海拔高达1867米，是海南岛的最高峰。这一自然景观的形成，经历了漫长的地质历史时期。现代旅游开发的过程
          随着旅游业的发展，五指山风景区逐渐得到了开发和利用。五指山市依托其独特的自然资源和丰富的文化历史，积极推动旅游业的发展，并推出了一系列旅游项目和产品。例如，五指山雨林栈道、五指山大峡谷漂流、五指山蝴蝶牧场等。这些项目的推出，不仅吸引了大量游客前来观光游览，还促进了当地经济的发展
        </p>
      </div>
      <div class="right">
        <img src="@/assets/风景名胜五指山素材1.jpg" alt="">
      </div>
    </div>

  </div>
  <!-- <HomeFooter /> -->
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "Attractions",
  data() {
    return {
      title: '风景名胜',
      content: [


      ],
    }
  },
  components: { DefaultHeader, HomeFooter, SelfTemplate2 }
}
</script>

<style scoped>
.container {
  width: 66%;
  /*background-color: aqua;*/
  margin-left: 17%;
}

.container_h {
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
}

.el-breadcrumb {
  padding: 15px 0;
  /*background-color: white;*/
  border-bottom: 1px solid rgb(153, 153, 153);
}

.container_inner {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.container_head {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
}

h1 {
  text-align: center;
}

.left {
  float: left;
}

.left h2 {
  text-align: left;
  text-indent: 3%
}

h1 {
  color: rgb(59, 83, 123);
}

p {
  font-size: 18px;
  text-indent: 2em;
  line-height: 1.6;
}

.right {
  float: right;
  margin-left: 25px;
}

.right img {
  width: 100%;
}

.head-img {
  float: left;
}

.head-right {
  margin: auto;
}
</style>