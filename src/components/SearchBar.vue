<template>
    <div class="search_wrapper">
        <el-input v-model="keyword" style="width: 80%" size="large" placeholder="搜索内容" :prefix-icon="Search" />
        <el-button>搜索</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')
</script>

<style scoped lang='scss'>
.search_wrapper {
    width: 60%;
    display: flex;
    justify-content: center;
    margin: 0 auto 20px;

    // background-color: #908eff;

    :deep(.el-button) {
        width: 120px;
        height: 40px;
        margin-left: 10px;
    }
}
</style>