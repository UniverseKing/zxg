import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '@/views/home/home.vue'
import category from '@/views/category/category.vue'
import shopcart from '@/views/shopcart/shopcart.vue'
import user from '@/views/user/user.vue'
import productList from '@/views/product-list/product-list.vue'
import productDetail from '@/views/product-detail/product-detail.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/product-list',
    component: productList
  },
  {
    path: '/product/:id',
    component: productDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
