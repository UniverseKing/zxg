import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'   //rem布局

import { Tabbar, TabbarItem,Icon,Swipe, SwipeItem,Toast,Card } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Swipe).use(SwipeItem).use(Toast).use(Card);

import '@/common/style/base.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
