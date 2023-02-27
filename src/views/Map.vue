<template>
  <div id="map">
      <BaseMap  :center="[46.2276, 6.1443]" :zoom=15 @mapLoaded="onMapLoaded" />
  </div>
</template>
<script>
  import BaseMap from './../web-components/baseMap.vue'
  export default {
    components: {
      BaseMap
    }
  }
</script>

<style>
  #map{
    width: 100%;
    height: 100%;
  }
</style>
