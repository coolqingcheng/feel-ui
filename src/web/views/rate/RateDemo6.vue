<template>
  <f-rate v-model="rate" color="red"></f-rate>
  <f-rate v-model="rate" color="#e91e63"></f-rate>
  <f-rate v-model="rate" color="#5677fc"></f-rate>
  <f-rate v-model="rate" color="#259b24"></f-rate>
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