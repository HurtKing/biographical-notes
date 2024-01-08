import './assets/main.css'
import 'element-plus/dist/index.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as functions from '@/assets/js/functions.js'
import VueFullPage from 'vue-fullpage.js'
import ElementPlus from 'element-plus'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(router)
app.use(VueFullPage)
app.use(ElementPlus)

Object.keys(functions).forEach(key => {
    app.config.globalProperties[key] = functions[key]
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
