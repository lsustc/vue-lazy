import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/view1',
      name: 'view1',
      alias: '/',
      component: () => import(/* webpackChunkName: "view1" */ '../modules/view1/view1.vue')
    },
    {
      path: '/view2',
      name: 'view2',
      component: () => import(/* webpackChunkName: "view2" */ '../modules/view2/view2.vue')
    },
    {
      path: '/view3',
      name: 'view3',
      component: () => import(/* webpackChunkName: "view3" */ '../modules/view3/view3.vue')
    }
  ]
})

export default router
