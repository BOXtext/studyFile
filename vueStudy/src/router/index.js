import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueSTD from '@/components/VueSTD'
import Style from '@/components/Style'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/VueSTD',
      name: 'VueSTD',
      component: VueSTD
    },
    {
      path: '/Style',
      name: 'Style',
      component: Style
    }
  ]
})
