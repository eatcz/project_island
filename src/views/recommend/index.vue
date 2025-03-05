<template>
    <div class="recommend_container">
        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <ul class="recommend_list">
                <li class="recommend_item">
                    <!-- 图片 -->
                    <div class="preview_img">
                        <img src="https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg"
                            alt="">
                    </div>
                    <!-- 描述 -->
                    <div class="item_discraption">
                        <p>Deserunt magna consequat qui ut ea quis.Nostrud cupidatat veniam ullamco minim do ex sit
                            aliquip.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.recommend_container {
    width: 100%;
    // background-color: #409eff;

    // 内容
    .recommend_content {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        // background-color: #40E0D0;

        // 列表
        .recommend_list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            // height: 120px;
            background-color: #17bebb;
        }

        // item
        .recommend_item {

            // 图片容器
            .preview_img {
                width: 200px;
                height: 200px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
    }
}
</style>