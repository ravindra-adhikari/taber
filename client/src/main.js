import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { sync } from "vuex-router-sync"
import vuetify from "@/plugins/vuetify"

Vue.config.productionTip = false;

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
