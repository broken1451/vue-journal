import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DayBookRouter from "../modules/dayBook/router/index";
import AuthRouter from "../modules/auth/router/index";
import { isAuthenticatedGuardJournal } from '../modules/auth/router/authGuard';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/daybook",
    beforeEnter: [isAuthenticatedGuardJournal],
    ...DayBookRouter,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "daybook" */ "../modules/dayBook/layouts/DayBookLayout.vue"),
  },
  {
    path: "/auth",
    ...AuthRouter,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "daybook" */ "../modules/dayBook/layouts/DayBookLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
