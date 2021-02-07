<template>
  <f-slider :disabled="true" v-model="data.value"></f-slider>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 50,
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>