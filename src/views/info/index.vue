<template>
    <div class="recommend_container">

        <!-- 搜索 -->
        <div class="search_container">
            <div class="search_wrapper">
                <el-input v-model="keyword" size="large" placeholder="搜索内容" :prefix-icon="Search"
                    @input="handleSearch" />
            </div>
            <!-- <div class="search_result">

                <el-card class="box-card" v-if="resultList.length > 0">
                    <div class="card-header" v-for="item in resultList" :key="item.id">
                        <router-link @click="handleSearch()">{{ item.name }}</router-link>
                    </div>
                </el-card>

            </div> -->
        </div>

        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <CommonCard :data="list.data" type="info" @subscribe="handleShowSubscribe" @share="handleShowShare"
                @send="handleShowSend" />
        </div>
    </div>

    <!-- 预约弹窗 -->
    <el-dialog v-model="dialogSubVisible" title="预约" width="500" @before-close="handleClose" @closed="handleClose">
        <el-form :model="subForm" label-position="right" label-width="auto">
            <el-form-item label="姓名">
                <el-input v-model="subForm.username" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="酒店名称" props="name">
                <el-input v-model="subForm.name" disabled />
            </el-form-item>
            <el-form-item label="房型">
                <el-select v-model="subForm.flag">
                    <el-option v-for="(item, index) in ROOM_TYPE" :key="index" :label="item" :value="item" />
                </el-select>
            </el-form-item>
            <el-form-item label="开始时间" props="time">
                <el-date-picker v-model="subForm.startTime" type="datetime" format="YYYY-MM-DD HH:mm:ss"
                    placeholder="开始时间" />
            </el-form-item>
            <el-form-item label="结束时间" props="time">
                <el-date-picker v-model="subForm.endTime" type="datetime" format="YYYY-MM-DD HH:mm:ss"
                    placeholder="结束时间" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleClose">关闭</el-button>
                <el-button type="primary" @click="submitSubscribe">
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
                        <p class="price">{{ proInfo.data.cost == 0 ? '免费' : '￥' + proInfo.data.cost + '元' }}</p>
                    </div>
                </div>
                <div class="select">
                    <el-form label-position="right" label-width="auto" style="max-width: 300px">

                        <el-form-item label="选择分享用户">
                            <el-select v-model="messageInfo.data.sendId">
                                <el-option v-for="item in userList.data" :key="item.userId" :label="item.nickName"
                                    :value="item.userId" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="留言" style="margin-top: 10px;">
                            <el-input type="textarea" v-model="messageInfo.data.remark" placeholder="留言" />
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="sendMessage(1)">
                    分享
                </el-button>
            </div>
        </template>
    </el-dialog>

    <!-- 私信弹窗 -->
    <el-dialog v-model="dialogSendVisible" width="800" @closed="handleClose">
        <el-card>
            <template #header>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </template>

            <el-input type="textarea" v-model="messageInfo.data.remark" placeholder="输入私信" />
        </el-card>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="sendMessage">
                    发送
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'

import { getHot, getHotDetail } from '@/api/hot'
import { useUserInfoStore } from '@/store/userInfo'
import _ from 'lodash'
import CommonCard from '@/components/CommonCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { useHotStore } from '@/store/hot'
import { BASE_URL } from '@/config'
import { subHotel } from '@/api/hotel'
import { ElMessage } from 'element-plus'
import { sendMessages, getUser } from '@/api/info'
const hotStore = useHotStore();
const route = useRoute()

const userInfoStore = useUserInfoStore()


const keyword = ref(null)

const handleSearch = _.debounce(async () => {
    await hotStore.loadInfoData({ pid: route.query.pid, introduction: keyword.value })
    list.data = hotStore.infoList.data
}, 1000)
// {
//     if (keyword.value !== '') {
//         await hotStore.loadInfoData({ pid: route.query.pid, introduction: keyword.value })
//         resultList.value = hotStore.infoList.data
//         list.data = hotStore.infoList.data
//     } else {
//         nextTick(() => {
//             resultList.value = []
//             initData()
//         })
//     }
// }

const list = reactive({
    data: []
})

const initData = async () => {
    const res = await getHotDetail({ pid: route.query.pid })
    if (res.code == 0) {
        list.data = res.data.records
    }
}

// 预约
const dialogSubVisible = ref(false)

const subForm = reactive({
    id: '',
    userId: userInfoStore.info.userId,
    username: userInfoStore.info.nickName,
    name: '',
    flag: '',
    startTime: '',
    endTime: '',
    informationId: route.query.pid,
})

const ROOM_TYPE = ['单床房', '双床房', '大床房']

const handleShowSubscribe = (row) => {
    dialogSubVisible.value = true
    subForm.id = row.id
    subForm.name = row.name
}

// 提交预约
const submitSubscribe = async () => {
    const res = await subHotel(subForm)
    if (res.code == 0) {
        ElMessage.success('预约成功')
        dialogSubVisible.value = false
        subForm.startTime = ''
        subForm.endTime = ''
        subForm.flag = ''
        subForm.informationId = ''
        subForm.name = ''
    }
}




// 分享
const dialogShareVisible = ref(false)

const proInfo = reactive({ data: {} })

const userList = reactive({ data: [] })

const messageInfo = reactive({
    data: {
        userId: userInfoStore.info.userId,
        username: userInfoStore.info.nickName,
        informationId: '',
        remark: '',
        createBy: userInfoStore.info.nickName,
        createTime: new Date(),
        sendId: 1
    }
})

const handleShowShare = (row) => {
    proInfo.data = row
    messageInfo.data.informationId = row.id
    dialogShareVisible.value = true
}

const getShareUser = async () => {
    const res = await getUser()
    if (res.code == 200) {
        userList.data = res.data
    }
}

// 私信
const dialogSendVisible = ref(false)

const handleShowSend = (row) => {
    messageInfo.data.informationId = row.id
    dialogSendVisible.value = true
}

const sendMessage = async (type) => {
    const res = await sendMessages(messageInfo.data)
    if (res.code == 0) {
        if (type == 1) {
            ElMessage.success('已分享')
        } else {
            ElMessage.success('已发送私信')
        }

        dialogSendVisible.value = false
        dialogShareVisible.value = false
        messageInfo.data.sendId = 1
        messageInfo.data.remark = ''
    }
}

// 关闭弹窗
const handleClose = () => {
    dialogSubVisible.value = false
    dialogShareVisible.value = false
    subForm.startTime = ''
    subForm.endTime = ''
    subForm.flag = ''
    messageInfo.data.remark = ''
}

onMounted(() => {
    initData()
    getShareUser()
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