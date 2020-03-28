import VueToastr from "vue-toastr"
import Vue from "vue"

Vue.use(VueToastr)

// enable plugin vue-toastr to be used in notify plugin
const $toastr = new Vue().$toastr // uhh, this is probably dirty coding // plugin in plugin?

// notify plugin to create messages for the user
const notify =  {
  install (Vue) {
    Vue.prototype.$notify = {
      success(message, title="Success") {
        $toastr.s(message, title)
      },
      error(message, title="Error") {
        $toastr.e(message, title)
      },
      info(message, title="Info") {
        $toastr.i(message, title)
      }
    }
  }
}

export default notify

