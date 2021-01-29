<template>
  <f-rate v-model="rate" color="red" :count="3"></f-rate>
  <f-rate v-model="rate" color="#e91e63" :count="5"></f-rate>
  <f-rate v-model="rate" color="#5677fc" :count="7"></f-rate>
  <f-rate v-model="rate" color="#259b24" :count="9"></f-rate>
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