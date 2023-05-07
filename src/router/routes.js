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
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/home.vue'),
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
           },
           {
             path: 'view',
             name: 'station-viewer',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station.vue'),
           },
         ]
      },
      {
         path: '/station/:id(.*)',
         children: [
           {
             path: '',
             name: 'station-viewer-id',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/station.vue'),
           },
           {
             path: 'edit',
             name: 'station-editor',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host.vue')
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
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature-map2.vue')
           },
           {
             path: 'list',
             name: 'feature-list',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature-list.vue')
           },
           {
             path: '',
             name: 'feature-viewer',
             component: () => import(/* webpackChunkName: "dashboard" */ '@/views/feature.vue')
           }
         ]
      },
      {
         path: '/feature/:id',
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
      {
        path: '/forms/observation-type/create',
        name: 'observation-type-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observation-type.vue'),
      },
      {
        path: '/forms/facility-type/create',
        name: 'facility-type-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/facility-type.vue'),
      },
      {
        path: '/forms/feature-type/create',
        name: 'feature-type-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/feature-type.vue'),
      },
      {
        path: '/forms/wmo-region/create',
        name: 'wmo-region-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/wmo-region.vue'),
      },
      {
        path: '/forms/territory/create',
        name: 'territory-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/territory.vue'),
      },
      {
        path: '/forms/observed-property/create',
        name: 'observed-property-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observed-property.vue'),
      },
      {
        path: '/forms/observing-procedure/create',
        name: 'observing-procedure-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observing-procedure.vue'),
      },
      {
        path: '/forms/status/create',
        name: 'status-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/status.vue'),
      },
      {
        path: '/forms/time-zone/create',
        name: 'time-zone-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/time-zone.vue'),
      },
      {
        path: '/forms/source-type/create',
        name: 'source-type-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/source-type.vue'),
      },
      {
        path: '/forms/user/create',
        name: 'user-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/user.vue'),
      },
      {
        path: '/forms/media/create',
        name: 'media-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/media.vue'),
      },
      {
        path: '/forms/media-type/create',
        name: 'media-type-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/media-type.vue'),
      },
      {
        path: '/forms/host/create',
        name: 'host-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host.vue'),
      },
      {
        path: '/forms/host-environment/create',
        name: 'host-environment-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host-environment.vue'),
      },
      {
          path: '/forms/climate-zone/create',
        name: 'climate-zone-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/climate-zone.vue'),
      },
      {
        path: '/forms/surface-cover/create',
        name: 'surface-cover-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/surface-cover.vue'),
      },
      {
        path: '/forms/surface-roughness/create',
        name: 'surface-roughness-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/surface-roughness.vue'),
      },
      {
        path: '/forms/topography/create',
        name: 'topography-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/topography.vue'),
      },
      {
        path: '/forms/season/create',
        name: 'season-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/season.vue'),
      },
      {
        path: '/forms/host-affiliation/create',
        name: 'host-affiliation-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host-affiliation.vue'),
      },
      {
        path: '/forms/programme/create',
        name: 'programme-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/programme.vue'),
      },
      {
        path: '/forms/record/create',
        name: 'record-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/record.vue'),
      },
      {
        path: '/forms/host-alias/create',
        name: 'host-alias-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host-alias.vue'),
      },
      {
        path: '/forms/host-responsible-party/create',
        name: 'host-responsible-party-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host-responsible-party.vue'),
      },
      {
        path: '/forms/host-media/create',
        name: 'host-media-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/host-media.vue'),
      },
      {
        path: '/forms/observer/create',
        name: 'observer-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observer.vue'),
      },
      {
        path: '/forms/control-schedule/create',
        name: 'control-schedule-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/control-schedule.vue'),
      },
      {
        path: '/forms/observer-characteristics/create',
        name: 'observer-characteristics-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observer-characteristics.vue'),
      },
      {
        path: '/forms/observing-method/create',
        name: 'observing-method-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observing-method.vue'),
      },
      {
        path: '/forms/observer-responsible-party/create',
        name: 'observer-responsible-party-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observer-responsible-party.vue'),
      },
      {
        path: '/forms/observer-media/create',
        name: 'observer-media-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observer-media.vue'),
      },
      {
        path: '/forms/collection/create',
        name: 'collection-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/collection.vue'),
      },
      {
        path: '/forms/feature/create',
        name: 'feature-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/feature.vue'),
      },
      {
        path: '/forms/source/create',
        name: 'source-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/source.vue'),
      },
      {
        path: '/forms/observation/create',
        name: 'observation-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/observation.vue'),
      },
      {
        path: '/forms/deployment/create',
        name: 'deployment-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/deployment.vue'),
      },
      {
        path: '/forms/maintenance-schedule/create',
        name: 'maintenance-schedule-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/maintenance-schedule.vue'),
      },
      {
        path: '/forms/exposure/create',
        name: 'exposure-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/exposure.vue'),
      },
      {
        path: '/forms/reference-surface/create',
        name: 'reference-surface-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/reference-surface.vue'),
      },
      {
        path: '/tests/geometry',
        name: 'test-geom',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/map-picker-test.vue'),
      },
      {
        path: '/tests/select-host',
        name: 'test-select',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/experimental/select-host.vue'),
      },
      {
        path: '/forms/deployment-media/create',
        name: 'deployment-media-form',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/forms/deployment-media.vue'),
      },
      ...generateOtherRoutes(navs)
    ],
  },
]

export default routes;
