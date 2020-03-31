import Vue from 'vue'
import Router from 'vue-router'
import bigBox from '../components/bigBox.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bigBox',
      component: bigBox
    }
  ]
})