<template>
  <div id="map">
      <BaseMap @mapLoaded="onMapLoaded" :center="center" :zoom="zoom" :selectEnabled="selectEnabled"/>
  </div>
</template>
<script>
  // import styles for leaflet
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";

  import { defineComponent, ref, computed, onMounted, watchEffect } from 'vue';
  import L from 'leaflet';
  import 'leaflet.markercluster';

  import BaseMap from './../web-components/baseMap.vue'
  import { loadData } from './loadData';
  import {store} from './../store/dataStore'

  console.log(store)

  export default defineComponent({
    name: "StationMap",
    components: {
      BaseMap
    },
    props: {
      stationfile: {
        type: String,
        default: "/data/hosts.psv"
      },
      center: {
        type: Object,
        default: () => ({ lat: 46.3097, lng: -79.4625 })
      },
      zoom: {
        type: Number,
        default: 8
      },
      selectEnabled: {
        type: Boolean,
        default: false
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
    setup(props){
      const onMapLoaded = (map) => {
        const cluster = L.markerClusterGroup();
        loadData(props.stationfile).then( data => {
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
            marker.bindPopup('<h3><a href="http://localhost:5000/collections/ca_stations/items/'+feature.id+'">' + feature.properties.id + '</a></h3>')
            // add to cluster
            cluster.addLayer(marker)
          }))
        });
        map.addLayer(cluster)

        map.on('lasso.finished', (event) => {
          const selectedMarkers = event.layers.filter(layer => layer instanceof L.Marker);
          const selected = selectedMarkers.map( (marker => { return marker.id}));
          console.log(selected)
          console.log(store)
          store.commit("setSelected", selected)
        });
      }
      return {onMapLoaded}
    }

  })


// Move to separate file?
function convertToGeoJson(data) {
  const geoJsonData = data.map(d => {
    // extract the coordinates from WKT string and create a LatLng object
    const coords = d.location.match(/POINT\(([-\d\.]+) ([-\d\.]+)\)/);
    console.log(coords)
    const latlng = [parseFloat(coords[1]), parseFloat(coords[2])];
    return {
      //type: 'FeatureCollection',
      //features: [{
        id: d.id,
        type: 'Feature',
        properties: {
          id: d.name,
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
