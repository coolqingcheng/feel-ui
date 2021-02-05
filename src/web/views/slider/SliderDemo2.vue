<template>
  <f-slider :showtip="true" v-model="data"></f-slider>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const data = ref(0);
    return {
      data,
    };
  },
};
</script>

<style>
</style>