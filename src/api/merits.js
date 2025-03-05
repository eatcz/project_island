import {get,post} from '@/util/request.js'
import {useTokenStore} from '@/store/token.js'

// 查看功德
export const getMerits = (userId) => get('/user/merits/getMerits?userId='+userId)

// 功德+1
export const addMerits = (params) => post('/user/merits/addMerits', params)