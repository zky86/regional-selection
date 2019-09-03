import Vue from 'vue'
import App from './App.vue'
import regionalSelection from './components/index'
Vue.use(regionalSelection)
new Vue({
  el: '#app',
  render: h => h(App)
})
