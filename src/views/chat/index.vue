<template>
    <div class="chat_container">
        <div class="sidebar">
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff">
                <el-menu-item index="1">
                    <span>私信</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <header>张三</header>
            <div class="content_view">
                聊天内容
            </div>
            <div class="message_input">
                <el-input type="textarea" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.chat_container {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 0 20px;

    .sidebar {
        width: 150px;

    }

    .content {
        flex: auto;

        header {
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
        }

        .content_view {
            height: 460px;
            border-bottom: 1px solid #ddd;
        }

        .el-textarea {
            outline: none;
            border: none;
        }
    }

}
</style>