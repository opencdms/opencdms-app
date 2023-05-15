<template>
<v-container>
    <v-row>
    <v-col :cols="12">
      <v-card>
        <v-card-title>Select station</v-card-title>
        <v-card-text><select-host v-model="selectedHost"/></v-card-text>
      </v-card>
    </v-col>
    </v-row>

    <v-row>
    </v-row>

    <v-row v-if='host'>
      <v-col :cols="12">
        <v-card>
          <v-card-title>Select from available data for {{ $route.params.id }}</v-card-title>

          <v-card-item>
              <v-container>
                <v-row style="height: 600px;">
                  <v-col :cols="4"><select-observed-property/></v-col>
                  <v-col :cols="4"><VueDatePicker :enable-time-picker="false" label="phenomenon_start" v-model="start_date"  hint="Phenomenon start date" persistent-hint></VueDatePicker></v-col>
                  <v-col :cols="4"><VueDatePicker :enable-time-picker="false" label="phenomenon_end" v-model="end_date"  hint="Phenomenon end date" persistent-hint></VueDatePicker></v-col>
                </v-row>
              </v-container>
            </v-card-item>

        </v-card>
      </v-col>
    </v-row>

</v-container>


</template>

<script>
import { defineComponent, ref, watchEffect, computed, watch } from 'vue';
import { VCard, VCardTitle, VCardText, VCardItem, VTabs, VTab, VBtn, VAutocomplete } from 'vuetify/lib/components';
import { VContainer, VCol, VRow } from 'vuetify/lib/components';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';
import { useRoute, useRouter } from 'vue-router';

import {useRepo} from 'pinia-orm';

import SelectHost from '@/web-components/pickers/select-host.vue';
import SelectObservedProperty from '@/web-components/pickers/select-observed-property.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
//import VueDatePicker from '@/web-components/pickers/date-picker.vue';
import '@vuepic/vue-datepicker/dist/main.css';


// opencdms imports
import Host from '@/models/Host';

export default defineComponent({
  name: 'station',
  components: {
    VCard,
    VCardTitle,
    VCardText,
    VCardItem,
    VTabs,
    VTab,
    VBtn,
    VAutocomplete, VContainer, VCol, VRow,
    SelectHost,
    SelectObservedProperty,
    VueDatePicker
  },
  methods: {},
  setup(props) {
    // set up varaiables
    const selectedHost = ref(null)
    const router = useRouter();
    const geom = ref(null);

    const start_date = ref(null);
    const end_date = ref(null);

    const query_param = ref(
      {
      }
    );


    // set up repos
    const hostRepo = useRepo(Host);
    const hostOptions = computed(() => { return hostRepo.all() });
    const host = ref(null)

    const edit = () => {
      router.push('/data/station/'+route.params.id+'/edit');
    };

    const fetchRecord = async(identifier) => {
      // load selected host
      host.value = useRepo(Host).where('id',route.params.id).first();
    }

    // add watch to update the geom
    watch(host, (newVal) => {
      if( newVal ){
        const coords = newVal.location.match(/POINT\(([-\d\.]+)\s+([-\d\.]+)\)/);
        const latlng = [parseFloat(coords[1]), parseFloat(coords[2])];
        geom.value = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: latlng
          }
        }
      }
      console.log(geom.value)
    });

    const route = useRoute();
    const data = ref([]);


    onMounted( async() => {
      fetchRecord( route.params.id );
      watchEffect( () => {
        fetchRecord( route.params.id );
      });
      watch( (selectedHost), (data) => {
        router.push('/data/station/'+data.id);
      } )
    });
    onErrorCaptured( () => {});
    return {host, edit, hostOptions, selectedHost, geom, start_date, end_date};
  }

});

</script>
