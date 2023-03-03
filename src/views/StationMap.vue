<template>
  <div id="map">
      <StationMap/>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'
  import StationMap from './../web-components/stationMap.vue'
  import BaseMap from './../web-components/baseMap.vue'
  export default {
    components: {
      BaseMap,
      StationMap
    }
  }
</script>

<style>
  #map{
    width: 100%;
    height: 100%;
  }
</style>
