<template>
  <f-slider :range="true" v-model="data.value" :filter="filter"></f-slider>
  {{data.value}}
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      value: [10, 50],
    });
    const filter = (e) => {
      return Math.round(e.value);
    };
    return {
      data,
      filter,
    };
  },
};
</script>

<style>
</style>