import HomeView from 'views/HomeView.vue'
import AboutView from "views/AboutView.vue"

export default [
  {
    path: "/", // the unique path of the page
    name: "home", // unique name of the page to be used in route object
    component: HomeView, // The component to be displayed
    bread_crumbs: ["home"], // the bread crumbs path
    icon: "mdi-view-dashboard", // icon to be used in the sidebar menu
    title: "Home", // The title of the page
    show: true // bool to check whether to display page or not
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    bread_crumbs: ["about"],
    icon: "mdi-view-dashboard",
    title: "About Us",
    show: true
  },
]