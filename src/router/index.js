import Vue from 'vue'
import Router from 'vue-router'
import wap from '../pages/wap'
import topic from '../pages/pc/topic.vue'
import main from '../pages/pc/main.vue'
import user from '../pages/pc/user.vue'
import getstart from '../pages/pc/getstart.vue'
import api from '../components/api.vue'
import reference from '../pages/pc/reference.vue'
import login from '../components/Login.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/pc',
      component: main
    },
    {
      path: '/pc/detail/:id',
      component: topic
    },
    {
      path: '/pc/user/:loginname',
      component: user
    },
    {
      path: '/pc/getstart',
      component: getstart
    },
    {
      path: '/pc/api',
      component: api
    },
    {
      path: '/pc/reference',
      component: reference
    },
    {
      path: '/pc/login',
      component: login
    },
    {
      path: '/wap',
      name: 'wap',
      component: wap,
    }

  ]
})
