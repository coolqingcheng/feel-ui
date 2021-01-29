<template>
  <f-rate v-model="rate" :readonly="true"></f-rate>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const rate = ref(3);
    return {
      rate,
    };
  },
};
</script>

<style>
</style>