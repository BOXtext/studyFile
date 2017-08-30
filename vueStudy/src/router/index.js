import Vue from 'vue'
import Router from '../include/routerOpen'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import LineChart from '@/components/childComponent/LineChart'
import testComponent from '@/components/testComponent'
import OPX from '@/components/forOPX'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/testComponent',
      name: 'testComponent',
      component: testComponent
    },{
        path: '/OPX',
        name: 'OPX',
        component: OPX
    }
  ]
})
