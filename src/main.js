import Vue from 'vue'
import Master from './components/layout/Master'
import routes from './routes'
import VueRouter from 'vue-router'
import {
  store
} from './store/store'


Vue.config.productionTip = false

window.eventBus = new Vue()

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(Master),
  router: router,
  store: store,
}).$mount('#app')