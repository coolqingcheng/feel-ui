<template>
  <f-color-picker format="rgb" v-model="data.color">
    <f-colorblock :color="data.color"></f-colorblock>
  </f-color-picker>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      color: "#ff7300",
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>