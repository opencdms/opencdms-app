<template>
  <div style="flex: 1; max-width: 1200px"><form2/></div>
</template>

<script>

import { defineComponent} from "vue";
import {VTextField, VContainer, VCol, VRow} from "vuetify/lib/components";
import form2 from "./../web-components/form2.vue";

export default {
  components: {
    form2,
    VContainer,
    VCol,
    VRow,
    VTextField,
  }
};
</script>
