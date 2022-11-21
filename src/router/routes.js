import DefaultLayout from '@/layouts/DefaultLayout'
import navs from "@/_nav"

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
      {
        path: '/display',
        name: 'Display',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "testpageone" */ '@/views/TestPageOne.vue'),
      },
      {
        path: '/hidden',
        name: 'HiddenPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "hiddenpage" */ '@/views/HiddenPage.vue'),
      },
      {
        path: '/custom-element',
        name: 'CustomElementDemo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "hiddenpage" */ '@/views/CustomElementDemo.vue'),
      },
    ],
  },
]





// Removes undisplayed pages from application routes
var processRoutes = (navs) => {
    let displayed = [];
    let displayedPaths = navs.map((nav) => {
                if (nav?.to !== undefined ) {
                    return nav.to;
                }
            })
    routes.forEach((route) => {
        let children = []
        if (displayedPaths.includes(route.path) || displayedPaths.includes(route?.redirect)){
            if (Array.isArray(route?.children)){
                route.children.map((child) => {
                    if (displayedPaths.includes(child.path) || displayedPaths.includes(child?.redirect)){
                        children.push(child)
                    }
            })
             route.children = children
            } 
            displayed.push(route)
        }
        
    })
    return displayed;
}

export default processRoutes(navs);