<template>
    <div class="center">
        <div class="side">
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="transparent" text-color="#000"
                router>
                <el-menu-item index="/center/share">
                    <span>我的分享</span>
                </el-menu-item>
                <el-menu-item index="/center/subscribe">
                    <span>我的预约</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.center {
    box-sizing: border-box;
    display: flex;
    width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
    height: 600px;

    .side {
        width: 200px;
        margin-bottom: 20px;
        background-color: #fff;
    }

    .content {
        flex: auto;
    }
}
</style>