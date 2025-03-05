import instance from "@/util/request";

export const loginService = (data) => instance.post('/user/login', data)