<template>
  <f-circular :width="5" v-model="value"></f-circular>
  <br />
  <f-button text="-" @click="opera(false)"></f-button>
  <f-button text="+" @click="opera(true)"></f-button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(45);
    const opera = (status) => {
      if (status) value.value += 5;
      else value.value -= 5;
    };
    return {
      value,
      opera,
    };
  },
};
</script>

<style>
</style>