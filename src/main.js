// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'

Vue.config.productionTip = false

// import VueCookies from 'vue-cookies'
// Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
