import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes: RoutesType[] = [
  { path: '/', name: '个人银行卡', component: () => import('./List.vue') },
  { path: '/edit', component: () => import('./Edit.vue') },
  { path: '/check', name: '变更个人银行卡', component: () => import('./Check.vue') }
]

export default new VueRouter({
  routes
})
