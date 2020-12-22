import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Cx from '../views/Cx.vue'
import Table from "../views/table/Index.vue"
import Uploader from "../views/uploader/Uploader.vue"
import Radio from "../views/radio/index.vue"
import CheckBox from "../views/checkbox/index.vue";
import Pager from "../views/pager/index.vue"
import Button from "../views/button/index.vue"
import Select from "../views/select/Index.vue"
import Progress from "../views/progressbar/Index.vue"
import DateTime from "../views/datetime/Index.vue"
import Tree from "../views/tree/Index.vue"
import Dialog from "../views/dialog/Index.vue"
import Spin from "../views/spin/Index.vue";

import Circular from "../views/progressbar/circular/Index.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/input/Index.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/icon",
    component: () => import("../views/icon/Index.vue")
  },
  {
    path: "/table",
    name: 'table',
    component: Table
  },
  {
    path: "/uploader",
    name: 'uploader',
    component: () => import('../views/uploader/Index.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/input/Index.vue')
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/checkbox',
    component: CheckBox
  },
  {
    path: '/pager',
    component: Pager
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/progressbar',
    component: Progress
  },
  {
    path: '/circular',
    component: Circular
  },
  {
    path: '/datetime',
    component: DateTime
  },
  {
    path: '/tree',
    component: Tree
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/spin'
    , component: Spin
  },
  {
    path: '/colorpicker',
    component: () => import("../views/colorpicker/Index.vue")
  },
  {
    path: '/forms',
    component: () => import("../views/form/Index.vue")
  },
  {
    path: '/switch',
    component: () => import("../views/switch/Index.vue")
  },
  {
    path: '/number',
    component: () => import("../views/number/Index.vue")
  },
  {
    path: '/card',
    component: () => import("../views/card/Index.vue")
  },
  {
    path: '/collapse',
    component: () => import('../views/collapse/Index.vue')
  },
  {
    path: '/menu',
    component: () => import('../views/menu/Index.vue')
  },
  {
    path: '/drawer',
    component: () => import('../views/drawer/Index.vue')
  },
  {
    path: '/tab',
    component: () => import('../views/tab/Index.vue')
  },
  {
    path: '/grid',
    component: () => import('../views/layout/Index.vue')
  },
  {
    path: '/directives',
    component: () => import('../views/directives/Index.vue')
  },
  {
    path: '/alert',
    component: () => import('../views/alert/Index.vue')
  },
  {
    path: '/notify',
    component: () => import('../views/notify/Index.vue')
  },
  {
    path: '/message',
    component: () => import("../views/message/Index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
