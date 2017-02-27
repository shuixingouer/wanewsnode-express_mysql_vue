import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import List from 'components/List'
import ChannelMenu from 'components/ChannelMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/ChannelMenu',
      name: 'ChannelMenu',
      component: ChannelMenu
    }
  ]
})
