import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'
import { VueFireDatabaseOptionsAPI } from 'vuefire'


// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        VueFireAuth(),
        VueFireDatabaseOptionsAPI()
    ],
})
app.use(router)

app.mount('#app')