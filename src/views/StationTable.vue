<template>
  <div class = "scroll-x">
    <h3>Stations</h3>
    <stationTable/>
  </div>
</template>

<style>
.scroll-x {
  overflow-x: auto;
  overflow-y: auto;
}
.v-data-table tbody tr td {
  font-size: 0.8rem;
}
</style>

<script>
  import stationTable from './../web-components/stationTable.vue'
  import { VDataTable } from 'vuetify/labs/VDataTable';
  export default {
    components:{
      stationTable,
      VDataTable
    }
  }
</script>
