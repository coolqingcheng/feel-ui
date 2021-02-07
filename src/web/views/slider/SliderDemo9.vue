<template>
  <f-slider color="red" v-model="data.value1"></f-slider>
  <f-slider color="green" v-model="data.value2"></f-slider>
  <f-slider color="#E91E63" v-model="data.value3"></f-slider>
  <f-slider color="#03A9F4" v-model="data.value4"></f-slider>
  <f-slider color="#212121" v-model="data.value5"></f-slider>
  <f-slider color="#E64A19" v-model="data.value6"></f-slider>
  {{data}}
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
      value5: 50,
      value6: 50,
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>