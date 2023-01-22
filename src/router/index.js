import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AjouterViews from '@/views/AjouterView.vue'
import JournalViews from '@/views/JournalView.vue'
import ClavierViews from '@/views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: AjouterViews
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalViews
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierViews
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
