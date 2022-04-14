import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ReusableList from '../views/ReusableList.vue'
import SgPage from '../views/SgPage'
import ColorsPallet from  '../views/ColorsPallet'
import Tipografia from  '../components/Tipografia'
import RegraEscrita from '../components/RegraEscrita'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/reusablelist',
    name: 'Reusable List',
    component: ReusableList
  },
  {
    path: '/sgpage',
    name: 'Style Guide Page',
    component: SgPage
  },
  {
    path: '/colors-pallet',
    name: 'Paleta de Cores',
    component: ColorsPallet
  },
  {
    path: '/tipography',
    name: 'Tipografia',
    component: Tipografia
  },
  {
    path: '/regras',
    name: 'Regras de Escritas',
    component: RegraEscrita
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
