import DefaultLayout from '@/layouts/DefaultLayout'
import navs from "@/_nav.js"

var generateOtherRoutes = (navs) => {
  let navigableEntries = navs.map((nav) => {
              if (nav?.to !== undefined ) {
                const comp = () => import(`../views/${nav.routeName}.vue`)
                var routeEntry = {
                   path: nav.to,
                   name: nav.routeName,
                   component: comp
                }
                
                return routeEntry;
              }

          })
  return navigableEntries
}
// Define all the application routes here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      ...generateOtherRoutes(navs)
    ],
  },
]



export default routes;