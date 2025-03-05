import { loginService } from '@/api/login'
import { removeAccessToken } from '@/util'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userInfo = reactive({})

    const accessToken = ref('')

    // 登录
    const login = async (loginInfo) => {
        try {
            const res = await loginService(loginInfo)
            console.log(res)
        } catch (err) { console.log(err) }
    }

    // 退出登录
    const logout = () => {
        removeAccessToken()
    }

    return { accessToken, userInfo, login, logout }
})