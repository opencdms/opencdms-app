<template>
  <div style="width: 100%; height: 100%;" id="map" :selectEnables="selectEnabled"></div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import "leaflet-lasso";


export default defineComponent({
  name: "BaseMap",
  props: {
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
  data(){
    return {
    }
  },
  setup( props, {emit} ) {
    const mapContainer = ref("map");
    const map = ref(null);
    onMounted( () =>{
      map.value = L.map(mapContainer.value, {zoomAnimation:false}).setView( props.center, props.zoom );
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OpenStreetMap contributors'}).addTo(map.value);
      emit('mapLoaded', map.value);
      if ( props.selectEnabled ){
        const lasso = new L.Control.Lasso();
        map.value.addControl(lasso)
      }
    })
    return {mapContainer};
  }
})
</script>
