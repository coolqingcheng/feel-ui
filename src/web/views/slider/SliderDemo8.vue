<template>
  <f-slider :min="min" :max="max" :step="20" v-model="value"></f-slider>
  {{value}}
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 500,
      min: 100,
      max: 1000,
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
</style>