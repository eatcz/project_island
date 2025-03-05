import instance from "@/util/request";

export const hotHotel = (params) => instance({
    url: '/information',
    params
})