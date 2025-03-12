import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://9857731ku9.zicp.fun',
    timeout: 15000
})

import { useTokenStore } from '@/store/token.js'
// 请求拦截
// 所有的网络请求都会走这个方法，可以在请求添加自定义内容
instance.interceptors.request.use(
    function (config) {
        const tokenStore = useTokenStore()
        console.log(tokenStore.token)
        if (tokenStore.token) {
            // 全局状态包含token，将token加到请求头里，【注意命名，后端要一致！！】
            config.headers.Authorization = tokenStore.token
        }
        /* if (config.method === 'post') {
            config.data = {
              ...config.data,
              _t: Date.parse(new Date()) / 1000 // 时间戳
            }
        } else if (config.method === 'get') {
            config.params = {
              random: Math.random(), // 随机数
              ...config.params
            }
        } */
        // config.headers.x_access_token = window.localStorage.getItem("user_token") // 请求头添加token值
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

import { ElMessage } from 'element-plus'
//import {useRouter} from 'vue-router'
//const router = useRouter() 
import router from '@/router'
// 响应拦截
// 此处可以根据服务器返回的[状态码]做相应的[处理]
instance.interceptors.response.use(
    function (response) {
        //const res = response
        // 200响应正常走这里
        return response.data;
    },
    function (error) {
        if (error.response.status === 400) {
            console.log('请求参数不正确')
        } else if (error.response.status === 401) {
            ElMessage.error('请先登录！')
            console.log('未授权，请先登录')
            router.push('/user/login')
        } else if (error.response.status === 404) {
            console.log('资源未找到')
        }
        // 超出2xx，比如4xx、5xx 走这里
        return Promise.reject('error')
    }
)

// 封装get和post请求
export function get(url, params) {
    return instance.get(url, params)
}

export function post(url, params) {
    return instance.post(url, params)
}

export default instance