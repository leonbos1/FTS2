import { createApp } from 'vue'
import App from './App.vue'
import Graph from './components/graph.vue'
import Home from './components/home.vue'
import ManageSensors from './components/manageSensors.vue'
import ControlPanel from './components/controlPanel.vue'
import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
    { path: '/', component: Home },
    { path: '/graph', component: Graph },
    { path: '/manage-sensors', component: ManageSensors },
    { path: '/control-panel', component: ControlPanel },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
