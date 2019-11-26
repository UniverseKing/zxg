import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '@/views/home/home.vue'
import category from '@/views/category/category.vue'
import shopcart from '@/views/shopcart/shopcart.vue'
import user from '@/views/user/user.vue'
import productList from '@/views/product-list/product-list.vue'
import productDetail from '@/views/product-detail/product-detail.vue'
import login from '@/views/login/login.vue'
import register from '@/views/register/register.vue'
import forgetpwd from '@/views/forget-password/forget-password.vue'
import profile from '@/views/profile/profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    component: category,
    meta: {
      index: 1
    }
  },
  {
    path: '/shopcart',
    component: shopcart,
    meta: {
      index: 1,
      auth: true
    }
  },
  {
    path: '/user',
    component: user,
    meta: {
      index: 1,
      auth: true
    }
  },
  {
    path: '/product-list',
    component: productList,
    meta: {
      index: 2
    }
  },
  {
    path: '/product/:id',
    component: productDetail,
    meta: {
      index: 3
    }
  },
  {
    path: '/login',
    component: login,
    meta: {
      index: 2
    }
  },
  {
    path: '/register',
    component: register,
    meta: {
      index: 3
    }
  },
  {
    path: '/forget-password',
    component: forgetpwd,
    meta: {
      index: 3
    }
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      index: 2,
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 需要验证的路由
  if (to.meta.auth) {
    // 获取用户登录信息
    const userinfo = JSON.parse(localStorage.getItem('userinfo'))
    console.log(userinfo)
    if (userinfo) {
      console.log(1);
      
      next()
    } else {
      next('/login')
    }
  } else {
    // 不需要验证的路由
    next()
  }
})

export default router
