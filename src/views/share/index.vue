<template>
    <div class="sub_container">
        <el-card>
            <ul class="infinite-list" style="overflow: auto">
                <li v-if="shareList.length > 0" class="recommend_item infinite-list-item" v-for="item in shareList"
                    :key="item.id">
                    <div class="preview_img">
                        <el-carousel height="180px" :indicator-position="'none'">
                            <el-carousel-item
                                v-for="path in filterPhoto(item.information[0] && item.information[0].photosPath)"
                                :key="path">
                                <img :src="BASE_URL + path" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="item_info">
                        <p>发送人:{{ item.username }}</p>
                        <p>名称:{{ item.information[0] && item.information[0].name || '' }}</p>
                        <p>类型:{{ item.information[0] && item.information[0].type || '' }}</p>
                        <p>私信内容:{{ item.remark || '' }}</p>
                        <p>创建时间:{{ dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss') || '' }}</p>
                    </div>
                </li>
                <h3 v-else>暂无分享</h3>
            </ul>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs';
import { BASE_URL } from '@/config';
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
