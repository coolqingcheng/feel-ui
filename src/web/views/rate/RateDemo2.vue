<template>
  <f-rate v-model="rate" :half="true"></f-rate>
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