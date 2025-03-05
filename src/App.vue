<script setup>
import DefaultHeader from './components/DefaultHeader.vue';
import HomeFooter from './components/HomeFooter.vue';
import SearchBar from './components/SearchBar.vue';
// 太牛逼了，卡点在这里解决了，跳转不到登陆页面，是因为这里引用导致循环引用了
//import LoginVue from '@/views/Login.vue'
//import Layout from '@/views/Layout.vue'

</script>

<template>
  <DefaultHeader />
  <div class="view_container">
    <SearchBar />
    <router-view></router-view>
  </div>
  <HomeFooter />
  <!-- <LoginVue/> -->
  <!-- <Layout/> -->
</template>

<style scoped lang="scss">
.view_container {
  // background-color: #908eff;
}
</style>
