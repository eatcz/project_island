import instance from "@/util/request";

export const hotHotel = (params) => instance({
    url: '/information',
    params
})

export const getHot = () => instance({
    url: '/information/infoAll'
})