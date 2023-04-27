<template>
  <v-card>
    <v-card-title>{{route.params.id ? 'Edit host' : 'Create new host' }}</v-card-title>
    <v-card-text></v-card-text>
    <v-card-text>
        <v-form>
            <v-card-item><v-text-field label="id" v-model="host.id"  hint="ID / primary key" persistent-hint></v-text-field></v-card-item>
            <v-card-item><v-text-field label="name" v-model="host.name"  hint="Preferred name of host" persistent-hint></v-text-field></v-card-item>
            <v-card-item><v-text-field label="description" v-model="host.description"  hint="Description of host" persistent-hint></v-text-field></v-card-item>
            <v-card-item><LinkForm :links="links" @updateLinks="updateLinks" ></LinkForm></v-card-item>
            <v-card-item><v-text-field label="location" v-model="host.location"  hint="Location of station" persistent-hint></v-text-field></v-card-item>
            <v-card-item><v-text-field label="elevation" v-model="host.elevation" type="number" hint="Elevation of station above mean sea level in meters" persistent-hint></v-text-field></v-card-item>
            <v-card-item><v-text-field label="wigos_station_identifier" v-model="host.wigos_station_identifier"  hint="WIGOS station identifier" persistent-hint></v-text-field></v-card-item>
            <v-card-item><v-autocomplete :items="facilityTypeOptions" item-title="name" item-value="id" label="facility_type" v-model="host.facility_type" :hint="facilityTypeOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><VueDatePicker label="date_established" v-model="host.date_established"  hint="Date host was first established" persistent-hint></VueDatePicker></v-card-item>
            <v-card-item><VueDatePicker label="date_closed" v-model="host.date_closed"  hint="Date host was first established" persistent-hint></VueDatePicker></v-card-item>
            <v-card-item><v-autocomplete :items="wmoRegionOptions" item-title="name" item-value="id" label="wmo_region" v-model="host.wmo_region" :hint="wmoRegionOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><v-autocomplete :items="territoryOptions" item-title="name" item-value="id" label="territory" v-model="host.territory" :hint="territoryOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><v-autocomplete :items="timeZoneOptions" item-title="name" item-value="id" label="time_zone" v-model="host.time_zone" :hint="timeZoneOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><VueDatePicker label="valid_from" v-model="host.valid_from"  hint="Date from which the details for this record are valid" persistent-hint></VueDatePicker></v-card-item>
            <v-card-item><VueDatePicker label="valid_to" v-model="host.valid_to"  hint="Date after which the details for this record are no longer valid" persistent-hint></VueDatePicker></v-card-item>
            <v-card-item><v-text-field label="_version" v-model="host._version" type="number" hint="Version number of this record (auto udpates)" persistent-hint disabled></v-text-field></v-card-item>
            <v-card-item><v-text-field label="_change_date" v-model="host._change_date"  hint="Date this record was changed (auto updates)" persistent-hint disabled></v-text-field></v-card-item>
            <v-card-item><v-autocomplete :items="userOptions" item-title="name" item-value="id" label="user" v-model="host._user" :hint="userOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><v-autocomplete :items="statusOptions" item-title="name" item-value="id" label="status" v-model="host._status" :hint="statusOptionsHint" return-object persistent-hint></v-autocomplete></v-card-item>
            <v-card-item><v-text-field label="comments" v-model="host.comments"  hint="Free text comments on this record, for example description of changes made etc" persistent-hint></v-text-field></v-card-item>
        </v-form>
        <v-btn @click="createHost">{{route.params.id ? 'Update' : 'Save' }}</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import * as d3 from 'd3';
import { defineComponent, ref, computed } from 'vue';
import { VCard, VCardTitle, VCardText, VCardItem, VForm, VTextField, VSelect, VBtn, VAutocomplete } from 'vuetify/lib/components';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {useStore} from 'pinia';
import {useRepo} from 'pinia-orm';
import {formatISO} from 'date-fns';

// pickers / form components
import LinkForm from '@/web-components/forms/links';
import VueDatePicker from '@/web-components/pickers/date-picker.vue';

// models for the CDM
import FacilityType from '@/models/FacilityType';
import WmoRegion from '@/models/WmoRegion';
import Territory from '@/models/Territory';
import TimeZone from '@/models/TimeZone';
import User from '@/models/User';
import Status from '@/models/Status';
import Host from '@/models/Host';

// utilities
import {loadData} from '@/utils/load-data.js';

import database from '@/database/';

export default defineComponent({
  name: 'HostForm',
  props: {
  },
  components: {
    VCard,
    VCardTitle,
    VCardText,
    VCardItem,
    VTextField,
    VSelect,
    VForm,
    VBtn,
    VueDatePicker,
    LinkForm,
    VAutocomplete
  },
  setup(props, context) {
    // routers
    console.log("Setting up routers for host ...")
    const router = useRouter();
    const route = useRoute();
    // set up links object
    console.log("Setting up links for host ...")
    const links = ref([]);
    const updateLinks = (updatedLinks) => {
      host.value.links = updatedLinks;
    }
    // set up repos
    console.log("Setting up repositories for host ...")
    const facilityTypeRepo = useRepo(FacilityType);
    const wmoRegionRepo = useRepo(WmoRegion);
    const territoryRepo = useRepo(Territory);
    const timeZoneRepo = useRepo(TimeZone);
    const userRepo = useRepo(User);
    const statusRepo = useRepo(Status);
    const hostRepo = useRepo(Host);
    // object we are editing
    console.log("Creating host object ...")
    const host = ref(hostRepo.make());

    // other objects
    console.log("Setting options for select inputs ...")
    // set options for the different drop down menu items (todo: check is we can move these to a function
    console.log("   facilityType")
    const facilityTypeOptions = computed(() => { return facilityTypeRepo.all() });
    const facilityTypeOptionsHint = computed(() => {
      if( host.value.facility_type && host.value.facility_type !== null ){
        console.log(host.value.facility_type);
        if ( 'description' in host.value.facility_type ){
          return host.value.facility_type.description;
        }else{
          return "";
        }
      }else{
        return "Select facility_type";
      }
    } );
    console.log("   wmoRegion")
    const wmoRegionOptions = computed(() => { return wmoRegionRepo.all() });
    const wmoRegionOptionsHint = computed(() => {
      if( host.value.wmo_region && host.value.wmo_region !== null ){
        if ( 'description' in host.value.wmo_region ){
          return host.value.wmo_region.description;
        }else{
          return "";
        }
      }else{
        return "Select wmo_region";
      }
    } );
    console.log("   territory")
    const territoryOptions = computed(() => { return territoryRepo.all() });
    const territoryOptionsHint = computed(() => {
      if( host.value.territory && host.value.territory !== null ){
        if ( 'description' in host.value.territory ){
          return host.value.territory.description;
        }else{
          return "";
        }
      }else{
        return "Select territory";
      }
    } );
    console.log("   timezone")
    const timeZoneOptions = computed(() => { return timeZoneRepo.all() });
    const timeZoneOptionsHint = computed(() => {
      if( host.value.time_zone && host.value.time_zone !== null ){
        if ( 'description' in host.value.time_zone ){
          return host.value.time_zone.description;
        }else{
          return "";
        }
      }else{
        return "Select time_zone";
      }
    } );
    console.log("   user")
    const userOptions = computed(() => { return userRepo.all() });
    const userOptionsHint = computed(() => {
      if( host.value._user && host.value._user !== null ){
        if ( 'description' in host.value._user ){
          return host.value._user.description;
        }else{
          return "";
        }
      }else{
        return "Select user";
      }
    } );
    console.log("   status")
    const statusOptions = computed(() => { return statusRepo.all() });
    const statusOptionsHint = computed(() => {
      if( host.value._status && host.value._status !== null ){
        if ( 'description' in host.value._status ){
          return host.value._status.description;
        }else{
          return "";
        }
      }else{
        return "Select status";
      }
    } );

    console.log("Declaring lifecycle hooks")

    onMounted( async () => {
      if( route.params.id ){
        console.log("loading host "+route.params.id);
        // this needs to be moved to a function
        console.log( useRepo(Host).where('id',route.params.id).get() )
        //let single = await useRepo(Host).where('id',route.params.id).first();
        let single = await useRepo(Host).where( (host) => {
          return host.id == route.params.id && (host._status_id == 1 || host._status_id == 2);
        }).orderBy('_version','desc').first();
        single._status_id = 3;
        useRepo(Host).save(single);
        console.log(single);
        // update status to archived and save back to repo
        // get linked objects
        single.facility_type = await useRepo(FacilityType).where('id',single.facility_type_id).first();
        single.wmo_region = await useRepo(WmoRegion).where('id',single.wmo_region_id).first();
        single.territory = await useRepo(Territory).where('id',single.territory_id).first();
        single.time_zone = await useRepo(TimeZone).where('id',single.time_zone_id).first();
        // set status_id to draft and increment version number
        single._change_date = formatISO(new Date());
        single._status = await useRepo(Status).where('name','draft').first();
        console.log(single._version);
        single._version = single._version + 1;
        console.log(single._version);
        single._user = await useRepo(User).where('id',1).first();;
        host.value = single;
        console.log(host.value);
      }
    });

    console.log("Declaring functions")
    // function to create new object and to add to store
    const createHost = async () => {
        let valueToSave = {};
        Object.assign(valueToSave,host.value);
        await hostRepo.save(valueToSave);
        // add preview page with confirmation to save?
        router.push('/station/'+host.value.id);
    };

    const resetHost = () => {
        Object.assign(host.value, hostRepo.make() );
    };

    console.log("Finished setting up host")
    return {
        host,
        createHost,
        resetHost,
        links,
        updateLinks, route,
        facilityTypeOptions, facilityTypeOptionsHint,
        wmoRegionOptions, wmoRegionOptionsHint,
        territoryOptions, territoryOptionsHint,
        timeZoneOptions, timeZoneOptionsHint,
        userOptions, userOptionsHint,
        statusOptions, statusOptionsHint
    }
  }
});
</script>
