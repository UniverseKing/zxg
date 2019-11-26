import axios from 'axios'
import { Toast } from 'vant'

import qs from 'qs'

// 配置请求的根域名
axios.defaults.baseURL = 'http://www.lovegf.cn:9527/api/'
// axios.defaults.baseURL = 'http://127.0.0.1:9527/api/'

axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('zxgToken')
    if (token) {
        config.headers['Authorization'] = token
    }
    return config;
}, function (error) {

    return Promise.reject(error);
});

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

/**
 * 商品列表
 */
export const getProcuctList = (params) => {
    return axios.get('/product/list', {
        params
    }).then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 商品详情
 */
export const getProcuctDetail = (params) => {
    return axios.get('/product/detail', {
        params
    }).then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 分类数据
 */
export const getcategoryData = () => {
    return axios.get('/category/data').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 登录
 */
export const login = (params) => {
    return axios.post('/user/login', qs.stringify(params)).then(res => {
        const { data } = res
        return data
    })
}

/**
 * 注册
 */
export const register = (params) => {
    return axios.post('/user/register', qs.stringify(params)).then(res => {
        const { data } = res
        return data
    })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
    return axios.get('/user/info').then(res => {
        const { data } = res
        return data
    })
}

/**
 * 退出登录
 */
export const logout = () => {
    return axios.post('/user/logout').then(res => {
        const { data } = res
        return data
    })
}

/**
 * 推荐商品
 */
export const getRecommend = () => {
    return axios.get('/product/recommend').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 获取购物车数据
 */
export const getCarList = () => {
    return axios.get('/cart/list').then(res => {
        const { data } = res
        if (data.status == 0) {
            return data.data
        } else {
            Toast.fail(data.msg)
        }
    })
}

/**
 * 加入购物车
 */
export const submitToCar = (params) => {
    return axios.post('/cart/add', qs.stringify(params)).then(res => {
        const { data } = res
        return data
    })
}

/**
 * 删除购物车数据
 */
export const delCar = (params) => {
    return axios.post('/cart/del', qs.stringify(params)).then(res => {
        const { data } = res
        return data
    })
}