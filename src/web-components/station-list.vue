<template>
  <v-card>
    <v-card-title>Stations</v-card-title>
    <v-card-text>
      <VTextField style="width: 400px;" v-model="search" prepend-icon="mdi-text-search" label="search" single-line hide-details></VTextField>
      <VDataTable v-model:sort-by="sortBy" :headers="headers" :items="items" :search="search" dense small ></VDataTable>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import { VCard, VCardTitle, VCardText } from 'vuetify/lib/components';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';
import { ref, computed, watchEffect, watch } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable';
import { VTextField } from 'vuetify/lib/components';

// opencdms components
import {loadData} from './data-load-from-file';
import {store} from './../store/data-store';

export default defineComponent({
  name: 'station-list',
  props: {
    connection: {
      type: String,
      default: "/data/hosts.psv"
    }
  },
  components: {
    VCard,
    VCardTitle,
    VCardText,
    VDataTable,
    VTextField
  },
  methods: {},
  setup(props) {
    const headers = ref([]);
    const data = ref([]);
    const search = ref("");
    const sortBy = ref([{key:"", order:"desc"}]);
    const items = ref([]);
    const selected = ref([]);

    onMounted( async() => {
      if (store.getters.getCSVData === null){
        data.value = await( loadData( props.connection ) );
      } else {
        data.value = store.getters.getCSVData.data;
      }
      headers.value = Object.keys(data.value[0]).map( key => ({
        title: key.replace("cdm_",""),
        value: key,
        sortable: true
      }))
      items.value = data.value;
    });
    return {headers, items, search, sortBy};
  }

});
</script>
