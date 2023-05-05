<template>
  <v-card>
    <v-card-title>Select station</v-card-title>
    <v-card-item><v-autocomplete :items="hostOptions" v-model="selectedHost" item-title="name" item-value="id" label="host" return-object persistent-hint></v-autocomplete></v-card-item>
  </v-card>
  <v-card>
    <v-card-title>Station: {{ $route.params.id }}</v-card-title>
        <v-card-item><v-card-text><pre>{{single}}</pre></v-card-text></v-card-item>
        <v-btn @click="edit">Edit</v-btn>
  </v-card>
</template>

<script>
import { defineComponent, ref, watchEffect, computed, watch } from 'vue';
import { VCard, VCardTitle, VCardText, VCardItem, VTabs, VTab, VBtn, VAutocomplete } from 'vuetify/lib/components';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';
import { useRoute, useRouter } from 'vue-router';

import {useRepo} from 'pinia-orm';

// opencdms imports
import Host from '@/models/Host';
import {loadData} from '@/utils/load-data.js';

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
    VCardItem,
    VTabs,
    VTab,
    VBtn,
    VAutocomplete
  },
  methods: {},
  setup(props) {
    const selectedHost = ref(null)
    const router = useRouter();

    // set up repos
    const hostRepo = useRepo(Host);
    const hostOptions = computed(() => { return hostRepo.all() });

    const edit = () => {
      router.push('/station/'+route.params.id+'/edit');
    };

    const single = ref([]);

    const fetchRecord = async (identifier) => {
      if( hostRepo.all().length === 0){
        await loadData('/data/hosts.psv').then( (result) => { hostRepo.save(result) });
      }
      single.value = await useRepo(Host).where('id', identifier).get()
      for (let i = 0; i < single.value.length; i++) {
        //console.log(single.value[i].links)
        if (typeof single.value[i].links === 'string'){
          single.value[i].links = JSON.parse(single.value[i].links);
        }
      }
    };

    const route = useRoute();
    const data = ref([]);
    // lifecycle hooks
    onBeforeMount( () => {
      // This hook is called before the component is mounted to the DOM.
      // This is a good place to do any necessary setup before the component is visible.
    });
    onMounted( async() => {
      fetchRecord( route.params.id );
      watchEffect( () => {
        fetchRecord( route.params.id );
      });
      watch( (selectedHost), (data) => {
        router.push('/station/'+data.id);
      } )
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
    return {single, edit, hostOptions, selectedHost};
  }

});
</script>
