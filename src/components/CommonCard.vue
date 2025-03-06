<template>
    <!-- 列表 -->
    <ul class="recommend_list">
        <li class="recommend_item" v-for="item in data" :key="item.id">
            <!-- 图片 -->
            <div class="preview_img">
                <img :src="BASE_URL + item.photosPath">
            </div>
            <!-- 描述 -->
            <div class="item_info">
                <div class="title">{{ item.name }}</div>
                <!-- 简介 -->
                <div class="des">
                    <!-- 评价 -->
                    <div class="evaluate">
                        <p class="remark">{{ item.grade }}分</p>
                        <p class="remark_info">{{ item.introduction }}</p>
                    </div>

                </div>

                <div class="rooms" v-if="type == 'info'">
                    <!-- 名称 -->
                    <!-- <div class="room_header">
                        <div class="room_name">
                            <span>如愿大床房</span>
                        </div>
                        <div class="tag">
                            <span>门店首单</span>
                            <span>白银贵宾价</span>
                            <span>满减券</span>
                        </div>
                    </div> -->

                    <!-- 取消时间 -->
                    <!-- <div class="vaild_time">
                        <p class="abolish">订单30分钟内可免费取消</p>
                    </div> -->

                    <!-- 价格 -->
                    <div class="room_price">
                        <p class="price">￥{{ item.cost }}</p>
                    </div>

                    <!-- 预约 -->
                    <div class="subscribe">
                        <el-button type="primary" @click="showInfo(item)">{{ text }}</el-button>
                    </div>
                </div>

                <!-- 预约 -->
                <div class="subscribe island" v-else>
                    <el-button type="primary" @click="showInfo(item)">{{ text }}</el-button>
                </div>

            </div>
        </li>
    </ul>
</template>

<script setup lang='ts'>
import { BASE_URL } from '@/config'

const { data, text, type } = defineProps(['data', 'text', 'type'])

const emit = defineEmits(['showInfo'])

// 查看详情
const showInfo = (item) => {
    emit('showInfo', item)
}
</script>

<style scoped lang='scss'>
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
}
</style>