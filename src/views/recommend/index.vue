<template>
    <div class="recommend_container">
        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <ul class="recommend_list">
                <li class="recommend_item" v-for="item in 60" :key="item">
                    <!-- 图片 -->
                    <div class="preview_img">
                        <img src="https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg">
                    </div>
                    <!-- 描述 -->
                    <div class="item_discraption">
                        <p class="descraption">Deserunt magna consequat qui ut ea quis.Nostrud cupidatat veniam ullamco
                            minim do ex sit
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
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(3, minmax(340px, 1fr));
            grid-template-rows: auto;
            gap: 20px;
            // background-color: #17bebb;
        }

        // item
        .recommend_item {
            // border-radius: 10px;
            // overflow: hidden;

            // 图片容器
            .preview_img {
                border-radius: 10px;
                overflow: hidden;
                // width: 200px;
                width: 100%;
                height: 300px;
                margin-bottom: 10px;
            }

            .item_discraption {
                width: 100%;
                max-width: 340px;

                .descraption {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    -webkit-line-clamp: 2
                }
            }
        }
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>