import Vue from 'vue'
import Router from 'vue-router'
import Yin from '../components/yin'
import Chang from '../components/chang'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'Yin',
    component: Yin
    },{
    path: '/chang',
    name: 'Chang',
    component: Chang
    }
  ]
})
