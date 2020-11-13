import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Cx from '../views/Cx.vue'
import Table from "../views/table/Table.vue"
import Uploader from "../views/uploader/Uploader.vue"
import Input from "../views/input/Input.vue"
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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Input
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
    path: "/table",
    name: 'table',
    component: Table
  },
  {
    path: "/uploader",
    name: 'uploader',
    component: Uploader
  },
  {
    path: '/input',
    name: 'input',
    component: Input
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
  }
]

const router = createRouter({
  history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
