<template>

    <AppSidebarFactory/>

</template>

<script>
  import { VNavigationDrawer, VIcon, VList, VListItem, VListItemTitle, VImg } from 'vuetify/lib/components'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { AppSidebarFactory } from './AppSidebarFactory'
  export default {
    name: 'AppSidebar',
    components: {
      AppSidebarFactory,
      VNavigationDrawer,
      VImg
    },
    setup() {
      const store = useStore()
      return {  }
    },
  };
</script>
