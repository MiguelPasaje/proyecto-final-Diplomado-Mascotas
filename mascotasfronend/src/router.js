import { createRouter, createWebHistory } from "vue-router";

import ListCate from './pages/ListCate.vue'
import HelloWorld from './components/HelloWorld.vue'
import PerrosAdopcion from './pages/PerrosAdopcion.vue'
import SobreNosotros from './pages/SobreNosotros.vue'
import GatosAdopcion from './pages/GatosAdopcion.vue'

const routes = [
    {
        name:'list',
        path: '/',
        component: ListCate
    },
    {
        name:'hello-world',
        path: '/hello-world',
        component: HelloWorld
    },
    {
        name:'perros-adopcion',
        path: '/perros-adopcion',
        component: PerrosAdopcion
    },
    {
        name:'gatos-adopcion',
        path: '/gatos-adopcion',
        component: GatosAdopcion
    },
    {
        name:'sobre-nosotros',
        path: '/sobre-nosotros',
        component: SobreNosotros
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router