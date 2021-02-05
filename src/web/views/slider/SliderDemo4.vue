<template>
  <f-slider :showtip="true" v-model="data.value" :min="50" :max="1000" :filter="filter" :tipchange="change">
    <template #footer>
      {{data.value}}
    </template>
  </f-slider>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 200,
    });

    const filter = (e) => {
      return Math.round(e.value);
    };

    const change = (e) => {
      return e.value + "GB";
    };

    return {
      data,
      filter,
      change,
    };
  },
};
</script>

<style>
</style>