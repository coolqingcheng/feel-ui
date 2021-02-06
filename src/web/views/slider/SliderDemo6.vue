<template>
  <f-slider :range="true" v-model="data.value"></f-slider>
  {{data.value}}
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      value: [10, 20],
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>