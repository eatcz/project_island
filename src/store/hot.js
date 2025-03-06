import { getHot, getHotDetail, hotHotel } from "@/api/hot";
import { defineStore } from "pinia";
import { reactive } from 'vue'
export const useHotStore = defineStore("hot", () => {
    const hotList = reactive({
        data: []
    })

    // 热门数据
    const loadHotData = async (params) => {
        const { code, data } = await getHot(params)
        if (code === 0) {
            hotList.data = data
        }
    }

    const infoList = reactive({
        data: []
    })

    // 酒店、美食
    const loadInfoData = async (params) => {
        const { code, data } = await getHotDetail(params)
        if (code === 0) {
            infoList.data = data.records
        }
    }



    return {
        hotList,
        loadHotData,
        infoList,
        loadInfoData
    }
});