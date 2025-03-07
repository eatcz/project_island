<template>
    <div class="sub_container">
        <el-card>
            <ul class="infinite-list" style="overflow: auto">
                <li v-for="i in 60" :key="i" class="infinite-list-item">{{ i }}</li>
            </ul>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.sub_container {
    width: 768px;
    margin: 0 auto;
    height: 580px;

    .infinite-list {
        height: 580px;
        padding: 0;
        margin: 0;
        list-style: none;


    }

    .infinite-list-item {
        height: 80px;
    }
}

.el-card {
    height: 100%;
}
</style>

<style>
.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>