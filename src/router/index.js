import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/historique',
    name: 'historique',
    component: HistoriqueViews
  },
  {
    path: '/recherche',
    name: 'recherche',
    component: RechercheViews
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
