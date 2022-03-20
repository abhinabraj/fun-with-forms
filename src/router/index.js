import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoForm from "../views/DemoForm.vue";
import practiceForm from "@/views/PracticeForm.vue";
import DynamicForm from "@/views/DynamicForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/demo",
    name: "demo",
    component: DemoForm,
  },
  {
    path: "/practise-form",
    name: "demo",
    component: practiceForm,
  },
  {
    path: "/dynamic-form",
    name: "dynamic",
    component: DynamicForm,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
