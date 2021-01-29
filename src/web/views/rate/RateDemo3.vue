<template>
  <f-rate v-model="rate" :half="true">
    <span>棒</span>
  </f-rate>
  <f-rate v-model="rate" :half="true">
    <span>A</span>
  </f-rate>
  <f-rate v-model="rate" :half="true">
    <span>B</span>
  </f-rate>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const rate = ref(1.5);
    return {
      rate,
    };
  },
};
</script>

<style>
</style>