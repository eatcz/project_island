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
            <CommonCard :data="list.data" type="info" @showInfo="handleShowInfo" @subscribe="handleSubscribe"
                @share="handleShare" />
        </div>
    </div>

    <!-- 预约弹窗 -->
    <el-dialog v-model="dialogSubVisible" title="预约" width="500">
        <el-form :model="subForm">
            <el-form-item label="姓名" :label-width="80">
                <el-input v-model="subForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" :label-width="80">
                <el-select v-model="subForm.name" placeholder="联系电话">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogSubVisible = false">关闭</el-button>
                <el-button type="primary" @click="dialogSubVisible = false">
                    预约
                </el-button>
            </div>
        </template>
    </el-dialog>
    <!-- 分享弹窗 -->
    <el-dialog v-model="dialogShareVisible" width="800">
        <div class="recommend_item">
            <!-- 图片 -->
            <div class="preview_img">
                <img :src="BASE_URL + proInfo.data.photosPath">
            </div>
            <!-- 描述 -->
            <div class="item_info">
                <div class="title">{{ proInfo.data.name }}</div>
                <!-- 简介 -->
                <div class="des">
                    <!-- 评价 -->
                    <div class="evaluate">
                        <p class="remark">{{ proInfo.data.grade }}分</p>
                        <p class="remark_info">{{ proInfo.data.introduction }}</p>
                    </div>

                </div>

                <div class="rooms">
                    <!-- 价格 -->
                    <div class="room_price">
                        <p class="price">￥{{ proInfo.data.cost }}</p>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="dialogShareVisible = false">
                    分享
                </el-button>
            </div>
        </template>
    </el-dialog>

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
import { BASE_URL } from '@/config'
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

// 预约
const dialogSubVisible = ref(false)

const subForm = reactive({ name: '' })

const handleSubscribe = (row) => {
    dialogSubVisible.value = true
    console.log(row)
}

// 分享
const dialogShareVisible = ref(false)

const proInfo = reactive({ data: {} })

const handleShare = (row) => {
    proInfo.data = row
    dialogShareVisible.value = true
    console.log(row)
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

.recommend_item {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 10px;

    // 图片容器
    .preview_img {
        border-radius: 10px;
        overflow: hidden;
        // width: 100%;
        width: 180px;
        height: 180px;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    .item_info {
        position: relative;
        flex: auto;

        .title {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .des {
            margin-bottom: 10px;
            font-size: 14px;
            color: #666;

            .evaluate {
                display: flex;

                .remark {
                    margin-right: 10px;
                }

                .remark_info {
                    color: #026df4;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    -webkit-line-clamp: 2
                }
            }
        }

        .rooms {
            position: relative;
            min-height: 100px;
            padding: 10px;
            background-color: #f9fafc;
            font-size: 14px;

            .room_header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .room_name {
                    font-weight: bold;
                }

                .tag {
                    padding: 5px;
                    background-color: #fff3f8;
                    font-size: 12px;
                    color: #f5b385;

                    span {
                        margin: 0 5px;
                    }
                }
            }

            .vaild_time {
                margin: 5px 0;

                .abolish {
                    font-size: 14px;
                    color: #8fbaad;
                }
            }

            // 价格
            .room_price {
                display: flex;
                justify-content: end;
                margin-bottom: 10px;

                .price {
                    font-size: 18px;
                    color: #0474e6;
                    font-weight: bold;
                }
            }

            .subscribe {
                position: absolute;
                bottom: 10px;
                right: 10px;
            }

        }

        .island {
            position: absolute;
            bottom: 20px;
            right: 10px;
        }

    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

a {
    text-decoration: none;
}
</style>