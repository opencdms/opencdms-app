import DefaultLayout from '@/layouts/DefaultLayout'
import navs from "@/_nav.js"


var generateOtherRoutes = (navs) => {
  let navigableEntries = [];
  navs.map((nav) => {
              if (nav.component === "VListItem"){
                if (nav.to !== undefined ) {
                  const comp = () => import(`../views/${nav.routeName}.vue`)
                  var routeEntry = {
                     path: nav.to,
                     name: nav.routeName,
                     component: comp,
                     props: nav.props
                  }
                  navigableEntries = [...navigableEntries, routeEntry];
                }
              }else if(nav.component === "VListGroup"){
                let items = generateOtherRoutes(nav.items)
                navigableEntries = [...navigableEntries, ...items];
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
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home.vue'),
      },
      // stations
      // - map
      // - list
      // - view single station
      // - edit single station
      // - configuration
      //   - observed parameters, qc limits
      //   - inspection / maintenance logs
      // sensors
      // - list
      // - view single sensor
      // - edit single sensor
      // - configure
      //   - sensor specifications
      //   - calibrations
      //   - inspection / maintenance logs
      // deployments
      // - list
      // - view single deployment information
      // - edit single deployment information
      // features
      // - map view
      // - list view
      // - view single feature
      // - edit single feature
      // data
      //
      // form entry
      // climate products
      // quality control
      // settings
      // WIS2.0
      // - metadata
      // - publication
      // - subscription

      {
         path: '/station',
         name: 'station',
         children: [
           {
             path: 'map',
             name: 'station-map',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station-map.vue')
           },
           {
             path: 'list',
             name: 'station-list',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station-list.vue')
           }
         ]
      },
      {
         path: '/station/:id',
         name: 'station-viewer',
         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station.vue'),
         children: [
           {
             path: 'edit',
             name: 'station-editor',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station.vue')
           },
           {
             path: 'history',
             name: 'station-history',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station-list.vue')
           }
         ]
      },
      {
        path: '/sensor',
        name: 'sensor',
        children: [
           {
             path: 'list',
             name: 'sensor-list',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/sensor-list.vue')
           }
        ]
      },
      {
         path: '/sensor/:id',
         name: 'sensor-viewer',
         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/sensor.vue'),
         children: [
           {
             path: 'edit',
             name: 'sensor-editor',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/sensor.vue')
           },
           {
             path: 'history',
             name: 'sensor-history',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/sensor-list.vue')
           }
         ]
      },
      {
        path: '/deployment',
        name: 'deployment',
        children: [
           {
             path: 'list',
             name: 'deployment-list',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/deployment-list.vue')
           }
        ]
      },
      {
         path: '/deployment/:id',
         name: 'deployment-viewer',
         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/deployment.vue'),
         children: [
           {
             path: 'edit',
             name: 'deployment-editor',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/deployment.vue')
           },
           {
             path: 'history',
             name: 'deployment-history',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/deployment-list.vue')
           }
         ]
      },
      {
         path: '/feature',
         name: 'feature',
         children: [
           {
             path: 'map',
             name: 'feature-map',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature-map.vue')
           },
           {
             path: 'list',
             name: 'feature-list',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature-list.vue')
           }
         ]
      },
      {
         path: '/feature/:id',
         name: 'feature-viewer',
         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature.vue'),
         children: [
           {
             path: 'edit',
             name: 'feature-editor',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature.vue')
           },
           {
             path: 'history',
             name: 'feature-history',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature-list.vue')
           }
         ]
      },
      ...generateOtherRoutes(navs)
    ],
  },
]

export default routes;
