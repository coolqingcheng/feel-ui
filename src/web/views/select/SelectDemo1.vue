<template>
  <f-select :data="data.select" v-model="data.value"></f-select>
  您的选择：<f-text :value="data.value" color="red"></f-text>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      select: [],
      value: "",
    });
    for (let i = 0; i < 5; i++) {
      data.select.push({
        key: i.toString(),
        value: "选择项:" + i,
      });
    }
    return {
      data,
    };
  },
};
</script>

<style>
</style>