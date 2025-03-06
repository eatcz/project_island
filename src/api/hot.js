import instance from "@/util/request";

export const hotHotel = (params) => instance({
    url: '/information',
    params
})

export const getHot = (params) => instance({
    url: '/information/infoAll',
    method: 'GET',
    params
})

// 查看详情
export const getHotDetail = (params) => instance({
    url: '/information/infoPidAll',
    method: 'GET',
    params
})

