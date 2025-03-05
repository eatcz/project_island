<template>
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
</template>

<script>
export default {
  name: "News",
  data(){
    return{
      loading: true,
    }
  },
  props: ['title', 'sub_title', 'source', 'img', 'text'],
  mounted() {
    this.loading = false
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