import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import App from './App.vue'
import 'reset.css'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'

/* const persist = createPersistedState()
const pinia = createPinia()
pinia.use(persist)
createApp(App).use(pinia).use(router).use(createPinia()).use(ElementPlus, {locale}).mount('#app') */

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale });
app.mount('#app')

