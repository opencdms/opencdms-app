<template>
  <v-navigation-drawer>
    <OpenCDMSLogo/>
    <v-list :lines="false" density="compact" nav>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-home" title="Home"/>
    <v-divider/>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-view-dashboard" title="Overview"/>
    <v-divider/>
    <v-list-group value="Stations">
      <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-map-marker" title="Stations"></v-list-item>
      </template>
      <v-list-item router :to="{name: 'StationMap'}" prepend-icon="mdi-map" title="Map"/>
      <v-list-item router :to="{name: 'StationTable'}" prepend-icon="mdi-table" title="List"/>
      <v-list-item router :to="{name: 'StationMapList'}" prepend-icon="mdi-map-marker" title="Combined view"/>
      <v-list-item router :to="{name: 'Form2'}" prepend-icon="mdi-form-select" title="Metadata"/>
      <v-list-item router :to="{name: 'Form2'}" prepend-icon="mdi-tools" title="Maintenance"/>
    </v-list-group>
    <v-divider/>
    <v-list-group value="Sensors">
      <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-thermometer" title="Sensors"></v-list-item>
      </template>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-table" title="List"/>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-form-select" title="Metadata"/>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-tools" title="Maintenance"/>
    </v-list-group>
    <v-divider/>
    <v-list-group value="Deployments">
      <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cog-clockwise" title="Deployments"></v-list-item>
      </template>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-table" title="List"/>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-form-select" title="Metadata"/>
      <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-tools" title="Maintenance"/>
    </v-list-group>
    <v-divider/>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-map-marker-circle" title="Features"/>
    <v-divider/>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-table" title="Data"/>
    <v-divider/>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-chart-histogram" title="Products"/>
    <v-divider/>
    <v-list-item router :to="{name: 'Content'}" prepend-icon="mdi-star" title="Quality control"/>
    <v-divider/>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  import { VNavigationDrawer, VIcon, VListGroup, VList, VListItem, VListItemTitle, VImg, VDivider } from 'vuetify/lib/components'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { AppSidebarFactory } from './AppSidebarFactory'
  import OpenCDMSLogo from './../web-components/opencdmsLogo'
  export default {
    name: 'AppSidebar',
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
    components: {
      AppSidebarFactory,
      VNavigationDrawer,
      VImg,
      VList,
      VListGroup,
      VListItem,
      VDivider,
      OpenCDMSLogo
    },
    setup() {
      const store = useStore()
      return {  }
    },
  };

</script>
