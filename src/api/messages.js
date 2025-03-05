import {get,post} from '@/util/request.js'

// 查看所有留言板
export const getAllMessageService = () => get('/messages')

// 新增留言
export const addMessageService = (params) => post('/addMessage', params)

// 删除留言
export const deleteMessageService = (params) => post('/deleteMessage', params)