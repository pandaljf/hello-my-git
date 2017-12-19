import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import impression from '../view/impression.vue'
import views from '../view/views.vue'
import ticket from '../view/buyTicket.vue'
import login from '../view/login.vue'
import flex from '../view/flex.vue'
import blog from '../view/blog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/impression',
      name: 'impression',
      component: impression
    },
    {
      path: '/views',
      name: 'views',
      component: views
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: ticket
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
