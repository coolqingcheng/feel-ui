<template>
  <f-slider :showtip="true" v-model="data.value" :tipchange="change"></f-slider>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 20,
    });

    const change = (e) => {
      return Math.round(e.value) + "GB";
    };

    return {
      data,
      change,
    };
  },
};
</script>

<style>
</style>