<template>
  <!-- <DefaultHeader></DefaultHeader> -->
  <div class="container_h">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a>{{ title }}</a> </el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
  </div>
  <!-- 外面包一个大容器 -->
  <div class="container">

    <div class="con">
      <img src="@/assets/地理环境用图1.jpg" alt="" class="img1">

      <p style="text-align: justify;">
        <strong>位置境域：</strong><br>
        海南省位于中国最南端。北以琼州海峡与广东省划界，西隔北部湾与越南相对，东面和南面在南海中与菲律宾、文莱、印度尼西亚和马来西亚为邻。<br>
        海南岛地处北纬18°10’～20°10’，东经108°37’～111°03’，岛屿轮廓形似一个椭圆形大雪梨，长轴呈东北至西南向，长约290千米，西北至东南宽约180千米，面积3.39万平方千米，是国内仅次于台湾岛的第二大岛。海岸线总长1944千米，有大小港湾68个，周围负5米至负10米的等深地区达2330.55平方千米，相当于陆地面积的6.8%。

      </p>
    </div>

    <div class="con">
      <img src="@/assets/地理环境用图4.jpg" alt="" class="img1">
      <p style="text-align: justify;">
        <strong>地形地貌：</strong><br>
        海南岛的地形地貌独具特色，整体呈现出四周低平、中间高耸的穹隆山地形。<br>
        以五指山和鹦哥岭为隆起核心区域，这里山峰巍峨，海拔较高，是海南地势的最高点。五指山因其五座山峰形似手指而得名，最高峰海拔达 1867
        米，山体峻峭，森林茂密，是众多河流的发源地。鹦哥岭同样地势险要，海拔也在千米以上，是海南重要的生态屏障。<br>
        从核心区域向外围，地势逐级下降，依次由山地、丘陵、台地、平原构成环形层状地貌，梯级结构十分明显。山地主要分布在中部和南部地区，山峦起伏，沟谷纵横，为众多珍稀动植物提供了栖息之所。随着地势逐渐降低，丘陵地带开始出现，其坡度相对较缓，植被丰富，多被开垦为果园、橡胶林等经济作物种植区。<br>
        再往外便是台地，台地地势较为平坦开阔，土层深厚，是海南重要的农业产区之一，种植着水稻、甘蔗等多种农作物。最外围则是平原，主要分布在沿海地区，如琼北平原、琼南平原等，这些平原地势低平，河网密布，是人口密集、经济较为发达的区域，也是城市和港口的主要分布地。<br>
        这种独特的地形地貌，不仅造就了海南丰富多样的自然景观，从高山峻岭到热带雨林，再到广袤的平原和美丽的海岸线，也对海南的气候、生态环境以及经济发展产生了深远的影响。

      </p>
    </div>

    <div class="con">
      <img src="@/assets/地理环境用图5.jpg" alt="" class="img1">
      <p style="text-align: justify;">
        <strong>气候环境：</strong><br>
        海南地处热带边缘，属于热带季风海洋性气候，这样的气候赋予了海南独特的气候环境。<br>
        从气温方面来看，海南全年温暖，年平均气温在 22-27℃之间。即使在冬季，这里的气温也很少会降到
        10℃以下，所以海南成为了众多游客避寒的热门目的地。在夏季，虽然气温相对较高，但由于海洋的调节作用，以及时常有海风拂面，并不会让人感觉过于酷热难耐。<br>
        降水方面，海南年降水量丰富，大部分地区年降水量在 1600 毫米以上。降水呈现出明显的季节差异，雨季主要集中在 5-10
        月，此时降雨频繁且强度较大，充沛的雨水为海南的植被生长提供了充足的水源，也使得海南的森林覆盖率极高，到处郁郁葱葱。而 11 月至次年 4 月则相对较为干旱，但整体来说，海南的气候湿润，空气清新。<br>
        海南受季风影响显著，夏季盛行西南季风，带来大量的水汽，形成降雨；冬季则盛行东北季风，较为干燥。季风的存在不仅影响着海南的降水和气温，还对海南的海洋运输、渔业等产业有着重要影响。同时，季风也造就了海南独特的海洋景观，如海浪、潮汐等。<br>
        在这样的气候环境下，海南孕育出了丰富的生物多样性，拥有众多珍稀的动植物品种。同时，温暖湿润的气候也使得海南的农作物可以一年多熟，为热带特色高效农业的发展提供了优越的条件。而且，宜人的气候吸引了大量游客前来旅游度假，推动了海南旅游业的繁荣发展。

      </p>
    </div>

  </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  data() {
    return {
      title: '地理环境',
      list: [

      ],

    }
  },
  components: { DefaultHeader, HomeFooter }
}
</script>

<style scoped>
.container {
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
  margin-bottom: 50px;
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

h1 {
  text-align: center;
  color: rgb(59, 83, 123);
}

.con {
  display: flex;
  margin-bottom: 5%;
  margin-left: 10px;
}

p {
  font-size: medium;
  text-align: center;
  line-height: 1.6;
  margin-left: 2%;
}

.img1 {
  width: 42%;
}
</style>