<template>
  <div>
    <h3>404，页面丢失了!</h3>
    <el-button type="primary" @click="this.$router.push('/')">返回首页</el-button>
    <h1>origin change</h1>
  </div>
</template>

<script>
export default {
name: "404"
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 0;
}
h3{
  font-size: 60px;
  font-weight: 800;
}
</style>