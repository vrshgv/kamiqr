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
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    component: Slider,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/reset',
    component: Reset,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/settings',
    component: Settings,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/slider',
    component: Slider,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/new-slider',
    component: NewSlider,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/menu',
    component: Menu,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/new-menu',
    component: NewMenu,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/catalogs',
    component: Catalogs,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/new-catalog',
    component: NewCatalog,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/orders',
    component: Orders,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/my-shop',
    component: MyShop,
    beforeEnter: ifAuthenticated
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
