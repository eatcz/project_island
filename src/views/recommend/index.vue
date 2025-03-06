<template>
    <div class="recommend_container">
        <!-- 内容 -->
        <div class="recommend_content">
            <!-- 列表 -->
            <ul class="recommend_list">
                <li class="recommend_item" v-for="item in imgList" :key="item" @click="handleViewDetail(item)">
                    <!-- 图片 -->
                    <div class="preview_img">
                        <img class="lazy" :data-src="item">
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
import { useRouter } from 'vue-router'
// import { useLazyLoad } from '@/hooks/useLazyload'
const router = useRouter()
// useLazyLoad('.lazy')

const imgList = [
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://qcloud.dpfile.com/pc/k1D716Y4hBSRu-MuhbNnd0JCSmnYBl3THPPFATOKlYAlTbztTpEKX2GStSeHhAMPG45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://p0.meituan.net/coverpic/b8664b3cc33ca912de26f38a0264d3dc77815.jpg%40538w_717h_1e_1c_1l%7Cwatermark%3D0',
    'https://qcloud.dpfile.com/pc/JCI6V0cwoVXDgN8iRUqanDPO4L7OPvyorm2EF2p4yrJdcfOP9aI9-XQw8T5ZHFEywHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://qcloud.dpfile.com/pc/O7l6eC41RNOPEOnlmNDrQp6i7YaggC_d8gbOBObK5KYjB9PnpfRGfwdf-EZnI0PtDVp-zYHis8GfUg70oICQUsm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://qcloud.dpfile.com/pc/JXib6askgRBcvjqaP--ykQexjZKsagreBCBVSwH4BYK5dTMBG8P69i-vzcEzx7dLG45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://qcloud.dpfile.com/pc/4D8Ezj-pnc04QXgjEjVEM-g7NTJaVn1kctiDhR-v7HXlMWQKcFZlJoYswg4v_lYj5IF8sFWgcpuunIkrBDXGQ8m_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://qcloud.dpfile.com/pc/uYFhrI_PJm8fhQ5Mtguya6mY9c4cZrstQLpn9K8sQvpK3IRWkjvhwdbevh0id74VG45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://qcloud.dpfile.com/pc/cs80edGYYTJ0P3HpwRZfN2qWEBmfb9R-YYuj7r6UzTC8aG1dF8b_gc15CDA8FaItKBX4yRA5Tg2_nxPE84U1XMm_qA1Pf8rFcayTY-n-rG8.jpg',
    'https://p0.meituan.net/coverpic/bc88fe2b31b3b79b64264df9c4cda30a178024.jpg%40538w_717h_1e_1c_1l%7Cwatermark%3D0',
    'https://pic.qqans.com/up/2024-6/2024621141556533.jpg',
    'https://pic.qqans.com/up/2024-6/2024621928276746.jpg',
    'https://pic.qqans.com/up/2024-6/2024619858262058.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://pic.qqans.com/up/2024-6/20246171057594725.jpg',
    'https://pic.qqans.com/up/2024-6/20246131155208570.jpg',
    'https://pic.qqans.com/up/2024-6/202461311413566.jpg',
    'https://pic.qqans.com/up/2024-6/2024641126466937.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
    'https://www.shiguang.pro/skycaiji/data/images/0b/74428fcc7e37c6c3f273d86f810bb3.jpg',
]

const handleViewDetail = () => {
    router.push({ name: 'info', params: { id: 1 } })
}

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
            cursor: pointer;
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