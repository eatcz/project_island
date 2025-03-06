<template>
    <div class="search_container">
        <div class="search_wrapper">
            <el-input v-model="keyword" size="large" placeholder="搜索内容" :prefix-icon="Search" @input="handleSearch" />
        </div>
        <div class="search_result">

            <el-card class="box-card" v-if="resultList.length > 0">
                <div class="card-header" v-for="item in resultList" :key="item.id">
                    <!-- <span>{{ item.name }}</span> -->
                    <router-link to="">{{ item.name }}</router-link>
                </div>
            </el-card>

        </div>
    </div>


</template>

<script setup>
import { ref, nextTick } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useHotStore } from '@/store/hot'
const hotStore = useHotStore();

const keyword = ref('')

const resultList = ref([])

const handleSearch = async () => {
    if (keyword.value !== '') {
        await hotStore.loadData({ introduction: keyword.value })
        resultList.value = hotStore.hotList.data
    } else {
        nextTick(() => {
            resultList.value = []
        })
    }
}

</script>

<style scoped lang='scss'>
.search_container {
    position: relative;
    width: 768px;
    margin: 0 auto 20px;

    .search_wrapper {

        display: flex;
        justify-content: center;


        // background-color: #908eff;

        :deep(.el-button) {
            width: 120px;
            height: 40px;
            margin-left: 10px;
        }
    }

    .search_result {
        position: absolute;
        left: 0;
        right: 0;
    }

    .card-header {
        padding: 10px 0;
        border-bottom: 1px solid #f1f1f1;
    }
}
</style>