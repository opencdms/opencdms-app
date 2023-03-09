<template>
  <div>
    <VTextField style="width: 400px;" v-model="search" prepend-icon="mdi-text-search" label="search" single-line hide-details></VTextField>
    <VDataTable v-model:sort-by="sortBy" :headers="headers" :items="items" :search="search" dense small @update:sortBy="t1"></VDataTable>
  </div>
</template>



<script>
import { loadData } from './loadData';
import { defineComponent, ref, computed, onMounted, watchEffect, watch } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable';
import { VTextField } from 'vuetify/lib/components';

import {store} from './../store/dataStore'

export default defineComponent({
  name: "StationTable",
  components: {
    VDataTable,
    VTextField
  },
  props: {
    datasource: {
      type: String,
      default: "/data/hosts.psv"
    },
  },
  methods: {
    t1(event){
      console.log("update")
      console.log(event)
    },
    t2(event){
      console.log("click")
      console.log(event)
    },
  },
  setup( props ){
    const headers = ref([]);
    const data = ref([]);
    const search = ref("");
    const sortBy = ref([{key:"", order:"desc"}])
    const items = ref([])
    const selected = ref([])

    onMounted( async () => {

      if (store.getters.getCSVData === null){
        data.value = await( loadData( props.datasource ) )
      } else {
        data.value = store.getters.getCSVData.data
      }

      headers.value = Object.keys(data.value[0]).map( key => ({
        title: key.replace("cdm_",""),
        value: key,
        sortable: true
      }))
    })

    watchEffect( () => {
      selected.value = store.getters.getSelected
    } )

    const filteredData = computed( () => {
      if (selected.value.length > 0){
        return data.value.filter( (item) => selected.value.includes( item.id ) )
      } else {
        return data.value;
      }
    })


    watch(filteredData, (newValue) => {
      items.value = newValue;
    })

    return {headers, search, sortBy, items};
  }
})

</script>
