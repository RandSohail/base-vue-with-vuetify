import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
