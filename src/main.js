import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'   //rem布局

import { Tabbar, TabbarItem,Icon,Swipe, SwipeItem,Toast  } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Swipe).use(SwipeItem).use(Toast);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
