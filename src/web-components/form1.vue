<template>
  <h1>Host Form</h1>
  <div class="myform">
    <json-forms
      :schemafile="`forms/host.yaml`"
      :data="data"
      :renderers="renderers"
      :schema="loadedSchema"
      :uischema="loadedUISchema"
      @change="onChange"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import {defaultStyles, mergeStyles, vanillaRenderers} from "@jsonforms/vue-vanilla";
import yaml from 'js-yaml';

// mergeStyles combines all classes from both styles definitions into one
const myStyles = mergeStyles(defaultStyles, { control: { label: "mylabel" } });

const renderers = [
  ...vanillaRenderers,
  // here you can add custom renderers
];

function createUiSchemaFromSchema(schema, path = "#/properties/") {
  const elements = Object.entries(schema.properties).map(([key,obj]) => {
    return obj.type === "object" ? {
        // If we have an object we need to expand and group
        type: "Group",
        label: key,
        elements: createUiSchemaFromSchema(obj, path+key+"/properties/").elements
      } : {
        // Else we have a control and need to build the path
        type: "Control",
        label: key,
        description: obj.description,
        scope: path + key
      };
  });

  return path === "#/properties/" ? {
    type: "VerticalLayout",
    elements: [...elements],
  } : {
    elements: [...elements],
  };
}

export default defineComponent({
  name: "App",
  components: {
    JsonForms,
  },
  created(){
    fetch('forms/host.yaml')
      .then(response => response.text())
      .then(data => {
        const loadedSchema = yaml.load(data);
        console.log(loadedSchema);
        const loadedUISchema = createUiSchemaFromSchema(loadedSchema)
        console.log( loadedUISchema );
        this.loadedSchema = loadedSchema;
        this.loadedUISchema = loadedUISchema;
      });
  },
  data() {
    return {
      // freeze renderers for performance gains
      renderers: Object.freeze(renderers),
      data: {
      },
      loadedSchema: null,
      loadedUISchema: null,
    };
  },
  methods: {
    onChange(event) {
      this.data = event.data;
    },
  },
  provide() {
    return {
      styles: myStyles,
    };
  },
  shadowRoot: true,
});
</script>


<style>

</style>
