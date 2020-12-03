<template>
  <f-progress-bar v-model="data.value"></f-progress-bar>
  <f-progress-bar
    v-model="data.value1"
    color="#CD5555"
    class="m-t-2"
    size="small"
  ></f-progress-bar>
  <f-progress-bar
    v-model="data.value2"
    color="#00FF00"
    class="m-t-2"
  ></f-progress-bar>
  <f-progress-bar
    v-model="data.value3"
    color="#FF7F50"
    class="m-t-2"
  ></f-progress-bar>
  <f-progress-bar
    v-model="data.value4"
    color="#1E90FF"
    class="m-t-2"
    size="large"
    :show-label="false"
  ></f-progress-bar>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 10,
      value1: 15,
      value2: 20,
      value3: 25,
      value4: 30,
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>