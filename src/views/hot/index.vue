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
                        <router-link :to="`/info?pid=${item.id}&introduction=${item.introduction}`">{{ item.name
                            }}</router-link>
                    </div>
                </el-card>

            </div>
        </div>


        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <CommonCard :data="list.data" text="查看详情" type="island" @showInfo="handleShowInfo" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, nextTick } from 'vue'
import _ from 'lodash'
import { getHot } from '@/api/hot'
import { useUserInfoStore } from '@/store/userInfo'
// import { useLazyLoad } from '@/hooks/useLazyload'
import CommonCard from '@/components/CommonCard.vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { useHotStore } from '@/store/hot'

const hotStore = useHotStore();
const router = useRouter()
// useLazyLoad('.lazy')
const userInfoStore = useUserInfoStore()

const keyword = ref(null)

const resultList = ref([])

const handleSearch = _.debounce(async () => {
    await hotStore.loadHotData({ introduction: keyword.value })
    resultList.value = hotStore.hotList.data
}, 1000)

// if (keyword.value !== '') {

//     _.debounce(async () => {
//         console.log(123)
//         await hotStore.loadHotData({ introduction: keyword.value })
//         resultList.value = hotStore.hotList.data
//     }, 1000)
// } else {
//     nextTick(() => {
//         resultList.value = []
//     })
// }



const list = reactive({
    data: []
})

const params = reactive({
    userId: userInfoStore.info.userId,

})

const getHotHotel = async () => {
    const { code, data } = await getHot()
    if (code === 0) {
        list.data = data
    }
}

// 查看详情
const handleShowInfo = async (row) => {
    // const res = await getHotDetail({ pid: row.id })
    // console.log(res)
    router.push({ name: 'info', query: { pid: row.id, introduction: row.introduction } })
}

onMounted(() => {
    getHotHotel()
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
    // background-color: #409eff;

    // 内容
    .recommend_content {
        max-width: 768px;
        width: 100%;
        margin: 0 auto;
        // background-color: #40E0D0;

        // 列表
        .recommend_list {
            box-sizing: border-box;
            gap: 20px;

            // item
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
                            }
                        }
                    }

                    .rooms {
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
                            display: flex;
                            justify-content: end;
                        }

                    }

                    // .descraption {
                    //     display: -webkit-box;
                    //     -webkit-box-orient: vertical;
                    //     overflow: hidden;
                    //     text-overflow: ellipsis;
                    //     line-clamp: 2;
                    //     -webkit-line-clamp: 2
                    // }
                }
            }
        }


    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>