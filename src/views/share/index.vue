<template>
    <div class="sub_container">
        <el-card>
            <ul class="infinite-list" style="overflow: auto">
                <li v-for="item in shareList" :key="item.id" class="infinite-list-item">
                    <p>名称:{{ item.information.name }}</p>
                    <p>类型:{{ item.information.type }}</p>
                    <p>私信内容:{{ item.remark }}</p>
                    <p>创建时间:{{ dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs';
import { getMessages } from '@/api/info';
import { useUserInfoStore } from '@/store/userInfo';
const userInfoStore = useUserInfoStore()

const shareList = ref([])

const getSubscribe = async () => {
    const res = await getMessages({ userId: userInfoStore.info.userId })

    if (res.code == 0) {
        shareList.value = res.data.records
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
