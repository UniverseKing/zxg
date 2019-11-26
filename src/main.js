import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'   //rem布局
import fastclick from 'fastclick'
fastclick.attach(document.body) //解决移动端点击300ms延时

import { Divider, Button, SwipeCell, Checkbox, Stepper, NavBar, Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Toast, Card, GoodsAction, GoodsActionIcon, GoodsActionButton, Sku } from 'vant';

Vue.use(Divider).use(Button).use(SwipeCell).use(Checkbox).use(Stepper).use(NavBar).use(Tabbar).use(TabbarItem).use(Icon).use(Swipe).use(SwipeItem).use(Toast).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Sku);

import '@/common/style/base.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
