import axios from 'axios'
import { Toast } from 'vant'

// 配置请求的根域名
axios.defaults.baseURL = 'http://www.lovegf.cn:9527/api/'

/**
 * 轮播图
 */
export const getsliders = () => {
    return axios.get('/home/sliders').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 分类入口
 */
export const getCategories = () => {
    return axios.get('/home/category').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 楼层数据
 */
export const getFloors = () => {
    return axios.get('/home/floorlist').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}