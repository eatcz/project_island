<template>
    <div class="sub_container">
        <el-card>
            <ul class="infinite-list" style="overflow: auto">
                <li v-for="item in subscribeList" :key="item.id" class="infinite-list-item">
                    <p>酒店名称:{{ item.name }}</p>
                    <p>预约开始时间:{{ dayjs(item.startTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    <p>预约结束时间:{{ dayjs(item.endTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    <p>预约状态:{{ item.flag }}</p>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs';
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
            min-height: 100px;
            background: var(--el-color-primary-light-9);
            margin: 10px;
            padding: 10px;
            color: var(--el-color-primary);
            text-align: center;

            p {
                margin-bottom: 20px;
            }

            &+.list-item {
                margin-top: 10px;
            }
        }
    }

}

.el-card {
    height: 100%;
}
</style>
