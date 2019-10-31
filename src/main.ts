/* Base styles */
import './assets/css/style.css'
/* Base imports */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* Plugins */
import './plugins/axios'
import './plugins/registerServiceWorker'
import './plugins/vuemeta'
import './plugins/vuelidate'
/* Filters */
import './filters/date.filter'
/* Atomic styles */
import './assets/css/modules/tags.css'
import './assets/css/modules/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
