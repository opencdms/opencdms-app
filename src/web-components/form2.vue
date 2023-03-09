<template>
  <div>
    <h2>Register / update station details</h2>
    <v-form>
      <h4>Identity</h4>
      <v-row>
        <v-col :cols="12"><v-text-field label="Station name" v-model="hostStore.$state.properties.name"/></v-col>
      </v-row>
      <v-row>
        <v-col :cols="6"><v-text-field label="Identifier" v-model="hostStore.$state.properties.id"/></v-col>
        <v-col :cols="6"><v-text-field label="WIGOS Identifier" v-model="hostStore.$state.properties.wsi"/></v-col>
      </v-row>
      <v-row>
        <v-col :cols="12"><v-textarea label="Free text description of station" v-model="hostStore.$state.properties.description"/></v-col>
      </v-row>
      <v-row>
        <v-col :cols="6"><v-text-field label="Station type" v-model="hostStore.$state.properties.facility_type"/></v-col>
      </v-row>
      <v-divider/>
      <h4>Location</h4>
      <v-row>
        <v-col :cols="4">
          <v-row><v-col :cols="12"><v-text-field label="Latitude" type="number" v-model.number="hostStore.$state.geometry.coordinates[1]"/></v-col></v-row>
          <v-row><v-col :cols="12"><v-text-field label="Longitude" type="number" v-model.number="hostStore.$state.geometry.coordinates[0]"/></v-col></v-row>
          <v-row><v-col :cols="12"><v-text-field label="Station elevation above sea level" type="number" v-model.number="hostStore.$state.properties.elevation"/></v-col></v-row>
          <v-row><v-col :cols="12"><v-text-field label="WMO Region" v-model="hostStore.$state.properties.wmo_region"/></v-col></v-row>
          <v-row><v-col :cols="12"><v-text-field label="WMO Territory" v-model="hostStore.$state.properties.territory"/></v-col></v-row>
        </v-col>
        <v-col :cols="8">
          <div style="height: 90%; width: 90%; v-align: center; h-align: center;"><BaseMap @mapLoaded="onMapLoaded" :center="[0, 0]" :zoom="3"/></div>
        </v-col>
      </v-row>
      <v-divider/>
      <h4>Operating dates</h4>
      <v-row>
        <v-col :cols="6"><v-text-field label="Date established" v-model="hostStore.$state.properties.date_established"/></v-col>
        <v-col :cols="6"><v-text-field label="Date closed" v-model="hostStore.$state.properties.date_closed"/></v-col>
      </v-row>
      <v-divider/>
      <h4>Record history</h4>
      <v-row>
        <v-col :cols="6"><v-text-field label="Record valid from" v-model="hostStore.$state.properties.valid_from"/></v-col>
        <v-col :cols="6"><v-text-field label="Record valid to" v-model="hostStore.$state.properties.valid_to"/></v-col>
      </v-row>
      <v-row>
        <v-col :cols="4"><v-text-field label="Record version" v-model="hostStore.$state.properties.version"/></v-col>
        <v-col :cols="4"><v-text-field label="Last updated by" v-model="hostStore.$state.properties.user"/></v-col>
        <v-col :cols="4"><v-text-field label="Change date" v-model="hostStore.$state.properties.change_date"/></v-col>
      </v-row>
      <v-row>
        <v-col :cols="12"><v-textarea label="Free text comments / description of changes" v-model="hostStore.$state.properties.comments"/></v-col>
      </v-row>
      <v-divider/>
      <h4>Links</h4>
      <v-divider/>
      <v-row>
        <v-col :cols="4"><v-btn type="submit" block class="mt-2">Cancel</v-btn></v-col>
        <v-col :cols="4"><v-btn type="submit" block class="mt-2">Save</v-btn></v-col>
        <v-col :cols="4"><v-btn type="submit" block class="mt-2">Submit</v-btn></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import L from 'leaflet';

import {defineComponent, ref, watch, onMounted} from "vue";

import {VDivider, VContainer, VCol, VRow} from "vuetify/lib/components";
import {VTextField, VTextarea, VForm, VBtn} from "vuetify/lib/components";

import {useStore} from 'pinia'

import BaseMap from './../web-components/baseMap.vue'
import { loadData } from './loadData';
import {store} from './../store/dataStore'
import {useHost} from '@/store/useHost'

import {useRepo} from 'pinia-orm'
import Host from './../models/Host'
import data from './../data/hosts.js'

export default defineComponent({
  name: "form2",
  components: {
    VContainer,
    VCol,
    VRow,
    VTextField,
    VForm,
    VBtn,
    VDivider,
    VTextarea,
    BaseMap
  },
   props: {
    datasource: {
      type: String,
      default: "/data/hosts.psv"
    },
  },
  setup(props){

    const map = ref(null);
    const marker = ref(null);

    const hostRepo = useRepo(Host)
    hostRepo.save(data.hosts)

    const hostStore = useHost();

    console.log( hostStore.$state )

    const updateMarker = () => {
        if (hostStore.$state.geometry.coordinates[1] !== null && hostStore.$state.geometry.coordinates[0] !== null) {
          if (marker.value !== null){
            marker.value.setLatLng([hostStore.$state.geometry.coordinates[1], hostStore.$state.geometry.coordinates[0]])
            map.value.setView({lat: hostStore.$state.geometry.coordinates[1], lon: hostStore.$state.geometry.coordinates[0]}, 6)
          }else{
            marker.value = L.marker([hostStore.$state.geometry.coordinates[1], hostStore.$state.geometry.coordinates[0]])
            if( map.value !== null){
              marker.value.addTo(map.value)
            }
          }
        }
    };

    onMounted( async () => {
      if (hostStore.$state.geometry.coordinates !== null ) {
        updateMarker()
      }else{
        console.log("invalid")
      }
    } );

    const onMapLoaded = (mapInstance) => {
      map.value = mapInstance;
      updateMarker();
    };

    watch( () => [hostStore.$state.geometry.coordinates[0],hostStore.$state.geometry.coordinates[1]], () => {
      updateMarker()
    });
    return {onMapLoaded, updateMarker, map, data, hostStore}
  },
})

</script>
