import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/font-awesome/css/font-awesome.min.css'
import './assets/css/tailwind.css'

createApp(App).use(store).use(router).mount('#app')
