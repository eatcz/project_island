<template>
    <div class="search_container">
        <div class="search_wrapper">
            <el-input v-model="keyword" size="large" placeholder="搜索内容" :prefix-icon="Search" @input="handleSearch" />
            <!-- <el-button @click="handleSearch">搜索</el-button> -->
        </div>
        <div class="search_result">
            <div v-for="item in resultList" :key="item.id">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>{{ item.name }}</span>
                        </div>
                    </template>
                    <div class="text item">
                        {{ item.introduction }}
                    </div>
                </el-card>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue'
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
        resultList.value = []
    }
}

</script>

<style scoped lang='scss'>
.search_container {
    position: relative;
    width: 60%;
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
}
</style>