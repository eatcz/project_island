<template>
  <!--  <h1>节庆活动</h1>-->
  <!-- <DefaultHeader/> -->
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <!--  2312-->
  <!--  <img src="../img/sjd.jpg" alt="">-->
  <!--  213-->
  <!-- <HomeFooter /> -->
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "TravelGuide",
  data() {
    return {
      title: '城市规划',
      list: [],
      content: [


      ],
    }
  },
  components: { DefaultHeader, HomeFooter, SelfTemplate2 }
}
</script>

<style scoped></style>