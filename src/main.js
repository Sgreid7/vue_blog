import Vue from "vue";

import Master from "./components/layouts/Master";
import App from "./App";
import Home from "./components/brand/Home";
import About from "./components/brand/About";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { store } from "./store";

import axios from "axios";
import VueRouter from "vue-router";

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: "http://127.0.0.1:8001/api",
    });
  },
});

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/posts", component: App },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

const router = new VueRouter({
  routes,
});

Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Master),
  store: store,
  router,
}).$mount("#app");
