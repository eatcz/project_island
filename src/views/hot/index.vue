<template>
    <div class="recommend_container">
        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <ul class="recommend_list">
                <li class="recommend_item" v-for="item in list.data" :key="item.id">
                    <!-- 图片 -->
                    <div class="preview_img">
                        <img src="https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg">
                    </div>
                    <!-- 描述 -->
                    <div class="item_info">
                        <p class="name">{{ item.name }}</p>
                        <p class="descraption">{{ item.introduction }}</p>
                        <p class="price">¥{{ item.cost }}起</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'

import { hotHotel } from '@/api/hot'
import { useUserInfoStore } from '@/store/userInfo'
const userInfoStore = useUserInfoStore()

const list = reactive({
    data: []
})

const params = reactive({
    userId: userInfoStore.info.userId,
    current: 1,
    size: 10

})

const getHotHotel = async () => {
    const { code, data } = await hotHotel(params)
    if (code === 0) {
        list.data = data.records
    }
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
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        // background-color: #40E0D0;

        // 列表
        .recommend_list {
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(3, minmax(340px, 1fr));
            grid-template-rows: auto;
            gap: 20px;
            // background-color: #17bebb;
        }

        // item
        .recommend_item {
            // border-radius: 10px;
            // overflow: hidden;

            // 图片容器
            .preview_img {
                border-radius: 10px;
                overflow: hidden;
                // width: 100%;
                height: 300px;
                margin-bottom: 10px;
            }

            .item_info {
                // width: 100%;
                // max-width: 340px;
                font-size: 14px;

                .descraption {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    -webkit-line-clamp: 2
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