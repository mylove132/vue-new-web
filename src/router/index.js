import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import InterfaceCase from '../view/fanc/InterfaceCase'
import WebCase from '../view/fanc/WebCase'
import AppCase from '../view/fanc/AppCase'
import Login from '../view/common/Login'
import Index from '../view/common/Index'
import AddProject from '../components/AddProject'
import ProjectShow from '../components/ProjectShow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/fanc/interface',
          name: 'InterfaceCase',
          component: InterfaceCase,
          redirect:'/fanc/interface/show',
          children: [
            {
              path: '/fanc/interface/show',
              name: 'ProjectShow',
              component: ProjectShow
            },
            {
              path: '/fanc/interface/add',
              name: 'AddProject',
              component: AddProject
            }
          ]
        },
        {
          path: 'fanc/webauto',
          name: 'WebCase',
          component: WebCase
        },
        {
          path: 'fanc/appauto',
          name: 'AppCase',
          component: AppCase
        },
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
