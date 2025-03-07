<template>
    <div class="center">
        <div class="side">
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff"
                router>
                <el-menu-item index="/center/chat">
                    <span>私信</span>
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
    width: 100%;
    padding: 0 20px;

    .side {
        width: 200px;
        height: 600px;
        background-color: #fff;
    }

    .content {
        flex: auto;
    }
}
</style>