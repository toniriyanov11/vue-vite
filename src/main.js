import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import setupInterceptors from './api/setupInterceptors' 

//style
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";  

const app = createApp(App)

//axios
app.config.globalProperties.$axios = axios
// app.use(axios,axiosConfig)
setupInterceptors()

//router
app.use(router)

//pinia
const pinia = createPinia()
app.use(pinia)
app.mount('#app')



