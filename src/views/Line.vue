<template>
  <!--  <h1>热门线路页面</h1>-->
  <!-- <DefaultHeader></DefaultHeader> -->
  <SelfTemplate2 :title="title" :list="list" :content="content"></SelfTemplate2>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";
export default {
  name: "Line",
  data() {
    return {
      title: '热门线路',
      //list: ['诗意厦门', '夜游厦门', '鼓浪屿世遗', '自驾游', '周边游', '其他'],
      content: [
        { txt: '骑楼老街——海口钟楼——云洞图书馆——世纪大桥——海大南门夜市', img: 'src/assets/热门路线海口钟楼.jpg', label: '诗意厦门', route: '/line1' },
        { txt: '三亚南山文化旅游区——天涯海角——鹿回头公园', img: 'src/assets/热门路线三亚南山文化旅游区.jpg', label: '诗意厦门', route: '/line2' },
        { txt: '亚蜈支洲岛 → 大东海 → 丝绸之路', img: 'src/assets/热门路线大东海.jpg', label: '诗意厦门', route: '/line3' },
      ],
    }
  },
  components: { DefaultHeader, SelfTemplate2 }
}
</script>

<style scoped></style>