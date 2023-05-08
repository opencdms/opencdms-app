<template>
  <v-card style="height: 500pt;">
    <v-card-text style="height: 100%;">
      <base-map @mapLoaded="onMapLoaded" style="height: 100%;" zoom="4"/>
    </v-card-text>
  </v-card>
</template>


<script>
// geojson validator
import * as gjv from 'geojson-validation';

// Leaflet
import L from 'leaflet';

// vue imports
import { defineComponent, ref, computed, watch } from 'vue';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';

// vuetify imports
import { VCard, VCardTitle, VCardText, VCardItem } from 'vuetify/lib/components';

// OpenCDMS imports
import BaseMap from "@/web-components/maps/base-map.vue"

export default defineComponent({
  name: "FeatureMap",
  props: {
    geom: {
      type: Object,
      required: false
    }
  },
  components: {
    VCard, VCardTitle, VCardItem, VCardText,
    BaseMap
  },
  setup( props, context ){
    const map = ref(null);
    const markerLayer = ref(null);
    const onMapLoaded = async (mapInstance) => {
      map.value = mapInstance;
      if ( props.geom ){
        // make sure the geometry is valid
        if( gjv.isFeature(props.geom) ){
          // now add to map
          markerLayer.value = L.geoJSON(props.geom).addTo(map.value);
          map.value.fitBounds(markerLayer.value.getBounds());
          map.value.setZoom(6);
          console.log("invalid geom");
        }
      }else{
        console.log("No geometry");
      }
    };
    watch( () => props.geom, (newValue) => {
      if( markerLayer.value ){
        markerLayer.value.remove();
      }
      markerLayer.value = L.geoJSON(newValue).addTo(map.value);
      map.value.fitBounds(markerLayer.value.getBounds());
      map.value.setZoom(6);
    })
    return {map, onMapLoaded};
  }
});

</script>
