<template>
  <v-card>
    <v-card-title>Station: {{ $route.params.id }}</v-card-title>

        <v-card-text><pre>{{single}}</pre></v-card-text>

  </v-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { VCard, VCardTitle, VCardText, VTabs, VTab } from 'vuetify/lib/components';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';
import { useRoute } from 'vue-router'
import {store} from './../store/data-store'
import {loadData} from './data-load-from-file'

export default defineComponent({
  name: 'station',
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
    VTabs,
    VTab
  },
  methods: {},
  setup(props) {
    const route = useRoute();
    const data = ref([]);
    const single = ref([]);
    // lifecycle hooks
    onBeforeMount( () => {
      // This hook is called before the component is mounted to the DOM.
      // This is a good place to do any necessary setup before the component is visible.
    });
    onMounted( async() => {
      // This hook is called after the component is mounted to the DOM.
      // This is a good place to perform any necessary DOM manipulations, initialize
      // third-party libraries, or set up event listeners.
      console.log( route.params )
      // check if data is loaded, if not load
      if (store.getters.getCSVData === null){
        data.value = await( loadData( props.connection ) )
      } else {
        data.value = store.getters.getCSVData.data
      }
      single.value = data.value.filter(item => item.wsi === route.params.id);
      for (let i = 0; i < single.value.length; i++) {
        single.value[i].links = JSON.parse(single.value[i].links);
      }


    });

    onBeforeUpdate( () => {
      // This hook is called when a component's data changes, but before the DOM is re-rendered.
      // This is a good place to make any necessary calculations or changes before the component
      // is updated.
    });
    onUpdated( () => {
      // This hook is called after the component is updated and the DOM is re-rendered.
      // This is a good place to perform any necessary DOM manipulations or update third-party
      // libraries.
    });
    onBeforeUnmount( () => {
      // This hook is called before the component is unmounted from the DOM.
      // This is a good place to clean up any resources or event listeners that were set up in
      // onMounted.
    });
    onUnmounted( () => {
      // This hook is called after the component is unmounted from the DOM.
      // This is a good place to perform any final cleanup or tear down of resources.
    });
    onErrorCaptured( () => {});
    return {single};
  }

});
</script>
