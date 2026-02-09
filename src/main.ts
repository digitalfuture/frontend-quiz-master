import { createApp } from 'vue'
import './style.css' // We might want to remove this or keep it empty
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
