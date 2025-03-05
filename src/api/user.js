import {get, post} from '@/util/request'

// 注册
export const userRegister = (params) => post('/user/register', params)
// 登录
export const userLogin = (params) => post('/user/login', params)
// 退出登录

// 获取用户个人信息
export const userInfoService = () => get('/user/userInfo')