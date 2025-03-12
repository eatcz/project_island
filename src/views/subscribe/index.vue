<template>
    <div class="sub_container">
        <el-card>

            <ul class="infinite-list" style="overflow: auto">
                <li class="recommend_item infinite-list-item" v-for="item in subscribeList" :key="item.id">
                    <div class="preview_img">
                        <el-carousel height="180px" :indicator-position="'none'">
                            <el-carousel-item v-for="path in filterPhoto(item.information[0].photosPath)" :key="path">
                                <img :src="BASE_URL + path" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="item_info">
                        <p>发送人:{{ item.username }}</p>
                        <p>预约酒店名称:{{ item.name }}</p>
                        <p>预约房型:{{ item.flag }}</p>
                        <p>预约开始时间:{{ dayjs(item.startTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                        <p>预约结束时间:{{ dayjs(item.endTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    </div>
                </li>
            </ul>


            <!-- <ul class="infinite-list" style="overflow: auto">
                <li v-for="item in subscribeList" :key="item.id" class="infinite-list-item">
                    <p>预约酒店名称:{{ item.name }}</p>
                    <p>预约房型:{{ item.flag }}</p>
                    <p>预约开始时间:{{ dayjs(item.startTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    <p>预约结束时间:{{ dayjs(item.endTime).format('YYYY-MM-DD HH:mm:ss') }}</p>

                </li>
            </ul> -->
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs';
import { BASE_URL } from '@/config';
import { getSubHotel } from '@/api/hotel';
import { useUserInfoStore } from '@/store/userInfo';
const userInfoStore = useUserInfoStore()

const subscribeList = ref([])

const getSubscribe = async () => {
    const res = await getSubHotel({ userId: userInfoStore.info.userId })
    console.log(res)
    if (res.code == 0) {
        subscribeList.value = res.data.records
    }
}

const filterPhoto = (photoStr) => {
    if (photoStr != null) {
        return photoStr.split(',')
    }
}



onMounted(() => {
    getSubscribe()
})
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

        .infinite-list-item {
            display: flex;
            min-height: 100px;
            background: var(--el-color-primary-light-9);
            margin: 10px;
            padding: 10px;
            color: var(--el-color-primary);
            text-align: center;

            // 图片容器
            .preview_img {
                border-radius: 10px;
                overflow: hidden;
                width: 180px;
                height: 180px;
                margin-bottom: 10px;
                margin-right: 10px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            p {
                margin-bottom: 20px;
            }

            &+.list-item {
                margin-top: 10px;
            }

            .item_info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 20px;
                text-align: left;
            }
        }
    }

}

.el-card {
    height: 100%;
}
</style>
