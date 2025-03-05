import {get,post} from '@/util/request.js'

// 查看记账的分类
export const getAllCategoryService = () => get('/user/account/getAllCategory')

// 新增记账分类
export const addCategoryService = (params) => post('/user/account/addCategory', params)
// 编辑分类
export const updateCategoryService = (params) => post('user/account/updateCategory', params)

