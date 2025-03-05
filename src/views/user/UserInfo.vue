<template>
    <!--  <h1>热门线路页面</h1>-->
    <!-- <DefaultHeader></DefaultHeader> -->
    <div class="back"></div>
    <el-container class="layout-container">
        <!-- 右侧主区域 -->
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <div class="userInfo">游客：<strong>{{ userInfoStore.info.nickName }}</strong></div>
                <!-- 下拉菜单 -->
                <!-- command: 条目被点击后会触发,在事件函数上可以声明一个参数,接收条目对应的指令 -->
                <el-dropdown placement="bottom-end" @command="handleCommand">
                    <span class="el-dropdown__box">
                        <!-- :src="userInfoStore.info.userPic? userInfoStore.info.userPic:avatar" -->
                        <el-avatar :src="avatar" />
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <!-- <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
                            <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
                            <el-dropdown-item command="resetPassword" :icon="EditPen">重置密码</el-dropdown-item> -->
                            <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <!-- 中间区域 -->
            <el-main>
                <!-- <div style="width: 1290px; height: 570px;border: 1px solid red;">
                    内容展示区
                </div> -->
                <img src="@/assets/userImgs.png" class="userImg">


                <router-view></router-view>
            </el-main>
            <!-- 底部区域 -->
            <!-- <el-footer>小羊记账 ©2024 Created by 小杨</el-footer> -->
        </el-container>
    </el-container>
</template>

<script setup>
import DefaultHeader from '@/components/DefaultHeader.vue';
import { useUserInfoStore } from '@/store/userInfo.js'
import { userInfoService } from '@/api/user';
import avatar from '@/assets/热门路线大东海.jpg'
import { useTokenStore } from '@/store/token.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
import { ElMessage, ElMessageBox } from 'element-plus'
import {
    SwitchButton,
    CaretBottom
} from '@element-plus/icons-vue'

const tokenStore = useTokenStore();

const userInfoStore = useUserInfoStore();
const getUserInfo = async () => {
    //调用接口
    let result = await userInfoService();
    console.log(result)
    //数据存储到pinia中
    userInfoStore.setInfo(result.data);
}

getUserInfo()

onMounted(async () => {
    let res = await userInfoService()
})

const handleCommand = (command) => {
    //判断指令
    if (command === 'logout') {
        //退出登录
        ElMessageBox.confirm(
            '您确认要退出吗?',
            '温馨提示',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
            }
        )
            .then(async () => {
                //退出登录
                //1.清空pinia中存储的token以及个人信息
                tokenStore.removeToken()
                userInfoStore.removeInfo()

                //2.跳转到登录页面
                router.push('/user/login')
                ElMessage({
                    type: 'success',
                    message: '退出登录成功',
                })

            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '用户取消了退出登录',
                })
            })
    } else {
        //路由
        router.push('/user/' + command)
    }
}

</script>

<style scoped>
.layout-container {
    width: 100%;
    height: 100vh;

    .el-aside {
        background-color: #232323;

        &__logo {
            height: 120px;
            background: url('@/assets/logo.png') no-repeat center / 80px auto;
        }

        .el-menu {
            border-right: none;
        }
    }

    .el-header {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-dropdown__box {
            display: flex;
            align-items: center;

            .el-icon {
                color: #999;
                margin-left: 10px;
            }

            &:active,
            &:focus {
                outline: none;
            }
        }

        .userInfo {
            margin-left: 35%;
        }
    }

    .el-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #666;
    }

}

.userImg {
    text-align: center;
    justify-content: center;
    width: 50%;
    margin-left: 20%;
}
</style>