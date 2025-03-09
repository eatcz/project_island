import instance from "@/util/request";

// 用户分享下拉
export const getUser = (params) => instance.get('user/userInfoAll', params)

export const getMessages = (params) => instance.get('/informationUserMessages', params)
export const sendMessages = (data) => instance.post('/informationUserMessages', data)