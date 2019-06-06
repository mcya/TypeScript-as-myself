import Vue from 'vue'

import Web from '@/web.vue'
import router from './router'
import '../../init'

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  data() {
    const user = sessionStorage.getItem('_u')

    return {
      user: user ? this.$parse(user) : {},
      captcha: '',
      status: -1 // 1-无银行卡 0-待审核 1-审核通过 2-审核不通过
    }
  },
  render: h => h(Web)
})

/* eslint-disable */
try {
  router.afterEach((to) => {
    setTimeout(() => {
      const params = {
        title: to.name,
        url: location.href
      }
      Vue.prototype.$http.post('/api/user/saveUserBrowse', params, { noToken: true })
      if (to.path) {
        if (window._hmt) {
          window._hmt.push(['_trackPageview', '/bank.html#' + to.fullPath])
        }
      }
    }, 20)
  })
} catch (e) {
  console.log(e)
}
