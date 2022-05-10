import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import global.css to style the whole page
import '@/assets/css/global.css'

//import element plus plugin
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//use(ElementPlus) is for element plugin
createApp(App).use(store).use(router).use(ElementPlus, {}).mount('#app')
