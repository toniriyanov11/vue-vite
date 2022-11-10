import Index from '/src/pages/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes  = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
