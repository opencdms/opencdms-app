import HomeView from 'views/HomeView.vue'
import AboutView from "views/AboutView.vue"
export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    bread_crumbs: ["home"],
    icon: "mdi-view-dashboard",
    title: "Home"
  },
  {
    path: "/about",
    name: "about",
    component: HomeView,
    bread_crumbs: ["about"],
    icon: "mdi-view-dashboard",
    title: "About Us"
  },
]