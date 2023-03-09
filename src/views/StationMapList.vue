<template>
  <div style="display: flex; flex-direction: column; height: 100%; width: 100%; padding: 0px;">23
    <StationMap id="map" style="flex-grow: 1; width:100%;" :selectEnabled="true" ></StationMap>
    <stationTable class="scroll-x" style="height: 50%; padding: 20px margin: 20px;"></stationTable>
  </div>
</template>

<script>
  import { computed, defineComponent, ref, watchEffect, watch } from 'vue'
  import StationMap from './../web-components/stationMap.vue'
  import stationTable from './../web-components/stationTable.vue'
  import { VDataTable } from 'vuetify/labs/VDataTable';

  import {store} from './../store/dataStore'

  export default {
    components: {
      StationMap,
      stationTable,
    }
  }
</script>

<style>

.scroll-x {
  overflow-x: auto;
  overflow-y: auto;
}
.v-data-table tbody tr td {
  font-size: 0.8rem;
}
  #table{
    padding: 10px;
  }
</style>
