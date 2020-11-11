import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index.vue'
import download from '@/components/download/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
