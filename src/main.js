import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParallaxJs from 'vue-parallax-js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueParallaxJs)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
