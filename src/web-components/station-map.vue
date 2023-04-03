<template>
  <base-map @mapLoaded="onMapLoaded" :center="mapCenter" :zoom="zoom"/>
</template>

<script>
  // Leaflet imports
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";
  import L from 'leaflet';
  import 'leaflet.markercluster';

  // vue / vuetify imports
  import { defineComponent } from 'vue';
  import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';

  // opencdms imports
  import BaseMap from "./../web-components/base-map.vue"
  import { loadData } from './data-load-from-file';
  import {store} from './../store/data-store'

  console.log(store)

  export default defineComponent({
    name: 'station-map',
    props: {
      connection: {
        type: String,
        default: "/data/hosts.psv"
      },
      mapCenter:{
        type: Object,
        default: () => ({ lat: 46.3097, lng: -79.4625 })
      },
      zoom: {
        type: Number,
        default: 8
      }
    },
    data() {
      return {
        map: null,
        data: null,
        geojson: null,
        selected: new Set(),
      }
    },
    components: {
      BaseMap
    },
    methods: {},
    setup(props) {
      console.log("setting up map")
      const onMapLoaded = (map) => {
        // leaflet cluster marker for clustering
        const cluster = L.markerClusterGroup();
        loadData(props.connection).then( data => {
          const geojson = convertToGeoJson( data );
          geojson.map( (feature => {
            // first create marker
            const marker = L.marker(feature.geometry.coordinates.reverse(), {
              // Set the marker icon, if desired
              icon: L.icon({
                iconUrl: 'marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              }),
            });
            // set ID for marker
            marker.id = feature.id
            // set type of marker
            marker.type = "host"
            // add popup to marker
            marker.bindPopup('<h3><a href="#/station/'+feature.properties.wsi+'"/>' + feature.properties.id + '</a></h3>')
            // add to cluster
            cluster.addLayer(marker)
          }))
        });
        map.addLayer(cluster)
        console.log("map loaded")
      }
      // lifecycle hooks
      onBeforeMount( () => {
        // This hook is called before the component is mounted to the DOM.
        // This is a good place to do any necessary setup before the component is visible.
      });
      onMounted( () => {
        // This hook is called after the component is mounted to the DOM.
        // This is a good place to perform any necessary DOM manipulations, initialize
        // third-party libraries, or set up event listeners.
      });
      onBeforeUpdate( () => {
        // This hook is called when a component's data changes, but before the DOM is re-rendered.
        // This is a good place to make any necessary calculations or changes before the component
        // is updated.
      });
      onUpdated( () => {
        // This hook is called after the component is updated and the DOM is re-rendered.
        // This is a good place to perform any necessary DOM manipulations or update third-party
        // libraries.
      });
      onBeforeUnmount( () => {
        // This hook is called before the component is unmounted from the DOM.
        // This is a good place to clean up any resources or event listeners that were set up in
        // onMounted.
      });
      onUnmounted( () => {
        // This hook is called after the component is unmounted from the DOM.
        // This is a good place to perform any final cleanup or tear down of resources.
      });
      onErrorCaptured( () => {});
      return {onMapLoaded};
    }
  });


  function convertToGeoJson(data) {
  const geoJsonData = data.map(d => {
    // extract the coordinates from WKT string and create a LatLng object
    const coords = d.location.match(/POINT\(([-\d\.]+) ([-\d\.]+)\)/);
    const latlng = [parseFloat(coords[1]), parseFloat(coords[2])];
    return {
      //type: 'FeatureCollection',
      //features: [{
        id: d.id,
        type: 'Feature',
        properties: {
          id: d.name,
          wsi: d.wsi,
          selected: false
          // add any additional properties here
        },
        geometry: {
          type: 'Point',
          coordinates: latlng
        },
      //}]
    };
  });
  return geoJsonData;
}

</script>
