<template>
  <span>输入框的值:{{ data.text }}</span>
  <f-input v-model="data.text"></f-input>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      text: "",
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>