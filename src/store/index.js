import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getCarList } from '@/http'

export default new Vuex.Store({
  // 定义保存数据的对象
  state: {
    userinfo: {},
    cars: []
  },
  // 定义用于更新数据的方法
  mutations: {
    setUserInfo(state, user) {
      localStorage.setItem('userinfo', JSON.stringify(user))
      state.userinfo = user
    },
    clearUser(state) {
      state.userinfo = {}
    },
    // 添加商品
    addGoods(state, goods) {
      const flag = state.cars.some(v => {
        if (v.id == goods.id) {
          v.count += goods.count
          return true
        }
      })
      if (!flag) {
        state.cars.push(goods)
      }
    },
    // 删除商品
    removeGoods(state, goodsId) {
      const index = state.cars.findIndex(v => v.id === goodsId)
      state.cars.splice(index, 1)
    },
    // 更新数量
    updateGoodsCount(state,goods){
      state.cars.some(v=>{
        if(v.id == goods.id){
          v.count = goods.count
          return true
        }
      })
    },
    // 更新选中状态
    updateGoodsChecked(state, checked) {
      state.cars.forEach(v => {
        v.ischecked = checked
      })
    },
    // 清空商品
    clearCars(state){
      state.cars = []
    }
  },
  getters: {
    // 计算总数量和总价格
    goodsCP(state) {
      let allCount = 0
      let allPrice = 0

      state.cars.forEach(v => {
        allCount += v.count
        if (v.ischecked) {
          allPrice += v.count * v.price * 100
        }
      })

      return {
        allCount,
        allPrice
      }
    },
    isAllChecked(state) {
      console.log(222)
      // return state.cars.every(v => v.ischecked)
      let flag = true
      state.cars.forEach(v=>{
        if(v.ischecked == false){
          flag = false
        }
      })
      return flag
    }
  },
  actions: {
    fetchCars(context) {
      getCarList().then(res => {
        res.forEach(v => {
          const goods = {
            id: v.productId,
            count: v.count,
            price: v.price,
            ischecked: false
          }
          context.commit('addGoods', goods)
        })
      })
    }
  },
  modules: {
  }
})
