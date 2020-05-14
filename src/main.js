import Vue from "vue";
import App from "./App.vue";

import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: "http://127.0.0.1:8001/api",
    });
  },
});

Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
