<template>
    <div class="recommend_container">

        <!-- 搜索 -->
        <div class="search_container">
            <div class="search_wrapper">
                <el-input v-model="keyword" size="large" placeholder="搜索内容" :prefix-icon="Search"
                    @input="handleSearch" />
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

        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <CommonCard :data="list.data" text="查看详情" type="info" @showInfo="handleShowInfo" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, nextTick } from 'vue'

import { getHot, getHotDetail } from '@/api/hot'
import { useUserInfoStore } from '@/store/userInfo'
// import { useLazyLoad } from '@/hooks/useLazyload'
import CommonCard from '@/components/CommonCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { useHotStore } from '@/store/hot'
const hotStore = useHotStore();
const route = useRoute()

const userInfoStore = useUserInfoStore()


const keyword = ref('')

const resultList = ref([])

const handleSearch = async () => {
    if (keyword.value !== '') {
        await hotStore.loadInfoData({ pid: route.query.pid, introduction: keyword.value })
        resultList.value = hotStore.infoList.data
    } else {
        nextTick(() => {
            resultList.value = []
        })
    }
}

const list = reactive({
    data: []
})

const params = reactive({
    userId: userInfoStore.info.userId,
})

const initData = async () => {
    // console.log(route.query)
    const res = await getHotDetail({ pid: route.query.pid })
    if (res.code == 0) {
        list.data = res.data.records
    }
    console.log(res)
}

// 查看详情
const handleShowInfo = async () => {
    // const res = await getHotDetail({ pid: row.id })
    // console.log(res)
    console.log(route.params)

}

onMounted(() => {
    initData()
})
</script>

<style scoped lang='scss'>
.search_container {
    position: relative;
    width: 768px;
    margin: 0 auto 20px;
    z-index: 999;

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

.recommend_container {
    width: 100%;

    .recommend_content {
        max-width: 768px;
        width: 100%;
        margin: 0 auto;
    }
}
</style>