<template>
    <div class="center">
        <div class="side">

        </div>
        <div class="content"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.center {
    padding: 0 20px;

    .side {
        width: 200px;
        height: 600px;
        background-color: #409eff;
    }
}
</style>