<template>
  <!--  海南旅游网 首页-->
  <div class="back">
    <!--    头部部分-->
    <!-- <HomeHeader></HomeHeader> -->


    <!--p4 版心-->
    <div class="container">
      <!--        版心最上面部分-->
      <Top1></Top1>

      <!--        版心中间部分-->
      <Top2></Top2>

      <!--        版心第三部分-->
      <Top3></Top3>
      <!--版心第四部分 --热门推荐-->
      <Top4></Top4>

      <!--        版心第五部分 --游记攻略-->
      <Top5></Top5>
    </div>

    <!--底部-->
    <!-- <HomeFooter></HomeFooter> -->
  </div>

  <!--  <body></body>-->
</template>

<script setup>
import '../style/css/index.css'
import Top1 from '@/components/Top1.vue'
import Top2 from '@/components/Top2.vue'
import Top3 from "@/components/Top3.vue";
import Top4 from "@/components/Top4.vue";
import Top5 from "@/components/Top5.vue";

</script>

<style scoped>
/*版心部分*/
.container {
  width: 80%;
  /*auto：居中*/
  margin: 0 auto;
  margin-top: 20px;
}

/*整个网页添加背景图片*/
.back {
  background: url("/img/bg.jpg");
}
</style>