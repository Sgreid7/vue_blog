import Vue from "vue";

import Master from "./components/layouts/Master";
import App from "./App";
import Home from "./components/brand/Home";
import About from "./components/brand/About";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
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
  {
    path: "/posts",
    component: App,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/about", component: About },
  {
    path: "/login",
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  { path: "/logout", component: Logout },
  {
    path: "/signup",
    component: Signup,
    meta: {
      requiresVisitor: true,
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        path: "/posts",
      });
    } else {
      next();
    }
  }
  {
    next(); // make sure to always call next()!
  }
});

Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Master),
  store: store,
  router,
}).$mount("#app");
