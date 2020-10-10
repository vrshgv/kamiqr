import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Slider from './components/slider/Slider'
import NewSlider from './components/slider/NewSlider'
import Menu from './components/menu/Menu'
import NewMenu from './components/menu/NewMenu'
import Catalogs from './components/catalogs/Catalogs'
import NewCatalog from './components/catalogs/NewCatalog'
import Orders from './components/orders/Orders'
import MyShop from './components/shop/MyShop'
import Login from './components/general/Login.vue'
import Reset from './components/general/Reset'
import Settings from './components/general/Settings'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Slider
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reset',
    component: Reset
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/new-slider',
    component: NewSlider
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/new-menu',
    component: NewMenu
  },
  {
    path: '/catalogs',
    component: Catalogs
  },
  {
    path: '/new-catalog',
    component: NewCatalog
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
