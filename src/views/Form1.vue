<template>
    <div id="form"><myform/></div>
</template>

<script>
import myform from "./../web-components/form1.vue"
export default {
    components: {
      myform
    }
};
</script>

<style>
#form{
  max-height: 80vh;
  width: 80vw;
  overflow-y: scroll;
  padding: 20px;
}
</style>
