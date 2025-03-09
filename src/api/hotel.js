import instance from "@/util/request";

// 查询预约酒店
export const getSubHotel = (params) => instance({
    url: '/hotel',
    method: 'GET',
    params
})

// 预约酒店
export const subHotel = (data) => instance({
    url: '/hotel',
    method: 'POST',
    data
})