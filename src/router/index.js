import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/testimonials",
    name: "testimonial",
    component: () => import("../views/Testi.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../views/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   if(savedPosition) {
  //     return savedPosition
  //   }else {
  //     return {x: 0, y:10}
  //   }
  // }
  methods: {
    studentUpdate: function () {
      this.$http.get("/webapi/student").then(
        (results) => {
          console.log(results.data.data);
          this.student = results.data.data;
        },
        (results) => {
          console.log("ERROR");
          console.log(results);
        }
      );
      setTimeout(this.studentUpdate, 5000);
    },
  },
  ready() {
    this.studentUpdate();
  },
});

export default router;
