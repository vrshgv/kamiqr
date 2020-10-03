import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Slider from './components/Slider'
import Menu from './components/Menu'
import Catalogs from './components/Catalogs'
import Orders from './components/Orders'
import MyShop from './components/MyShop'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/catalogs',
    component: Catalogs
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/my-shop',
    component: MyShop
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
