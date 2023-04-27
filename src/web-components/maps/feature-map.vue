<template>
  <v-card style="height: 600px;">
    <v-card-title>{{title}}</v-card-title>
    <base-map @mapLoaded="onMapLoaded" style="height: 100%;" zoom="4"/>
  </v-card>
</template>


<script>
// geojson validator
import * as gjv from 'geojson-validation';

// Leaflet
import L from 'leaflet';

// vue imports
import { defineComponent, ref, computed } from 'vue';
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
    VCard, VCardTitle, VCardItem,
    BaseMap
  },
  setup( props, context ){
    const map = ref(null);
    const onMapLoaded = async (map) => {
      if ( props.geom ){
        // make sure the geometry is valid
        if( gjv.isFeature(props.geom) ){
          console.log("Have geom");
          // now add to map
          L.geoJSON(geom).addTo(props.geom);
        }else{
          var example = {
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
            "properties": {"prop0": "value0"}
          }
          console.log(example)
          L.geoJSON(example).addTo(map);
          console.log("invalid geom");
        }
      }else{
        console.log("No geometry");
      }
    };
    return {map, onMapLoaded};
  }
});

// https://api.opencdms.org/collections/ca_clim/items?filter=phenomenon_end%20DURING%201990-02-01T00:00:00Z/1990-03-01T00:00:00Z

</script>
