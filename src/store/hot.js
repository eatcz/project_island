import { hotHotel } from "@/api/hot";
import { defineStore } from "pinia";
import { reactive } from 'vue'
export const useHotStore = defineStore("hot", () => {
    const hotList = reactive({
        data: []
    })

    const loadData = async (params) => {
        const { code, data } = await hotHotel(params)
        if (code === 0) {
            hotList.data = data.records
        }
    }

    return {
        hotList,
        loadData
    }
});