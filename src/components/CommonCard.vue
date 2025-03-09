<template>
    <!-- 列表 -->
    <ul class="recommend_list">
        <li class="recommend_item" v-for="item in data" :key="item.id">
            <!-- 图片 -->
            <div class="food">
                <h3 v-show="item.type == '美食'" style="font-weight: bold;font-size: 18px;margin-bottom: 10px;">{{
                    item.name }}</h3>
                <div class="preview_img">
                    <el-carousel height="180px" :indicator-position="'none'">
                        <el-carousel-item v-for="path in filterPhoto(item.photosPath)" :key="path">
                            <img :src="BASE_URL + path" />
                        </el-carousel-item>
                    </el-carousel>

                </div>
            </div>

            <!-- 描述 -->
            <div class="item_info">
                <div class="title" v-show="item.type != '美食'">{{ item.name }}</div>
                <!-- 简介 -->
                <div class="des">
                    <!-- 评价 -->
                    <div class="evaluate">
                        <p class="remark">{{ item.grade }}分</p>
                        <p class="remark_info">{{ item.introduction }}</p>
                    </div>

                </div>

                <div class="rooms" :class="{ isFood: item.type == '美食' }" v-if="type == 'info'">
                    <!-- 价格 -->
                    <div class="room_price">
                        <p class="price">{{ item.cost == 0 ? '免费' : '￥' + item.cost + '元' }}</p>
                    </div>

                    <!-- 预约 -->
                    <div class="subscribe">
                        <el-button type="primary" v-show="item.type != '美食'"
                            @click="handleSubscribe(item)">预约</el-button>
                        <el-button type="primary" @click="handleShare(item)">分享</el-button>
                        <el-button type="primary" @click="handleSend(item)">私信</el-button>
                    </div>
                </div>


                <div class="subscribe island" v-else>
                    <el-button type="primary" @click="handleInfo(item)">查看详情</el-button>
                </div>

            </div>
        </li>
    </ul>
</template>

<script setup lang='ts'>
import { BASE_URL } from '@/config'
const { data, type } = defineProps(['data', 'text', 'type'])

const emit = defineEmits(['showInfo', 'subscribe', 'share', 'send'])

// 预约
const handleSubscribe = (item) => {
    emit('subscribe', item)
}

const handleShare = (item) => {
    emit('share', item)
}

const handleInfo = (item) => {
    emit('showInfo', item)
}

const handleSend = (item) => {
    emit('send', item)
}

const filterPhoto = (photoStr) => {
    if (photoStr != null) {
        return photoStr.split(',')
    }
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

        .isFood {
            height: 150px;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
}
</style>