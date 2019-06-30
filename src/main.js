import Vue from 'vue'
import Master from './components/layout/Master'
import routes from './routes'
import VueRouter from 'vue-router'
import {
  store
} from './store/store'
import VeeValidate from 'vee-validate'
import CxltToastr from 'cxlt-vue2-toastr'

Vue.config.productionTip = false

const toastrConfig = {
  position: 'bottom right',
  showDuration: 2000,
  timeOut: 5000,
  progressBar: true,
}

window.eventBus = new Vue()

Vue.use(VueRouter)

Vue.use(VeeValidate)

Vue.use(CxltToastr, toastrConfig)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',

      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'todo',

      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  render: h => h(Master),
  router: router,
  store: store,
}).$mount('#app')