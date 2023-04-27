<template>
  <v-card>
    <v-card-title>{{label}}</v-card-title>
    <v-card-item><VueDatePicker v-model="selectedDate" :format="format" inline text-input inline-with-input></VueDatePicker></v-card-item>
  </v-card>
</template>

<script>
import { defineComponent, ref, watch, context } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import { VCard, VCardTitle, VCardText, VCardItem, VForm, VTextField, VSelect, VBtn } from 'vuetify/lib/components';
import '@vuepic/vue-datepicker/dist/main.css';
import {formatISO} from 'date-fns'
export default defineComponent({
  name: 'date-picker',
  components: {
    VueDatePicker, formatISO, VCard, VCardTitle, VCardItem
  },
  props: {
    label: {
      type: String,
      default: 'Pick a date'
    }
  },
  emits: ["update:modelValue"],
  setup(props, {emit} ) {
    const selectedDate = ref('');
    const format = (date) => {
      return formatISO(date);
    }

    watch(selectedDate, (newValue) => {
      console.log(newValue);
      emit('update:modelValue', format(newValue));
    })

    return {
      selectedDate, format
    }
  }
});
</script>
