import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import VueGtag from "vue-gtag-next"; // ✅ Import from the correct package

const app = createApp(App)

app.use(router)

app.use(VueGtag, {
  property: {
    id: "G-XEQ4P8XR3E"
  }
})

app.mount('#app')
