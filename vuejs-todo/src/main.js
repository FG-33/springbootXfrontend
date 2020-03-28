import Vue from 'vue'
import todo from './todo.vue'
import help from "./components/help/help.vue"

Vue.config.productionTip = false

const routes = {
  '/': todo,
  '/help': help
}

// Creates a Vue application
new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || "NotFound"
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
