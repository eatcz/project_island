import instance from "@/util/request";

export const hotHotel = (params) => instance.get('/information', params)