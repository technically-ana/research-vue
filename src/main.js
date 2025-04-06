import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'
import { VueFireDatabaseOptionsAPI } from 'vuefire'


import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
        VueFireDatabaseOptionsAPI()
    ],
})
app.use(router)

app.mount('#app')