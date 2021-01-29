<template>
  <f-rate v-model="rate" :size="35" :half="true"></f-rate>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const rate = ref(1);
    return {
      rate,
    };
  },
};
</script>

<style>
</style>