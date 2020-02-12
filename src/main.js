import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NSelectList from './components/NSelectList.vue'

Vue.config.productionTip = false
Vue.component('n-select-list', NSelectList);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
