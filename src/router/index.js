/**
 * @file 路由主入口，定义路由规则
 * @author wangyisheng@baidu.com (wangyisheng)
 */

import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
