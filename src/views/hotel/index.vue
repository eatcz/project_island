<template>
    <div class="recommend_container">
        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <CommonCard :data="list.data" text="查看详情" @showInfo="handleShowInfo" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive, onMounted } from 'vue'

import { getHot, getHotDetail } from '@/api/hot'
import { useUserInfoStore } from '@/store/userInfo'
import { useLazyLoad } from '@/hooks/useLazyload'
import CommonCard from '@/components/CommonCard.vue'

useLazyLoad('.lazy')
const userInfoStore = useUserInfoStore()

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
    const res = await getHotDetail({ pid: row.id })
    console.log(res)
}

onMounted(() => {
    getHotHotel()
})
</script>

<style scoped lang='scss'>
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