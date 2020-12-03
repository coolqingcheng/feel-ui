<template>
  <f-position direction="bottom">
    <template #trigger="{ on }">
      <f-button text="默认" v-on="on"></f-button>
    </template>
    <f-time-picker v-model="data.time"></f-time-picker>
  </f-position>
</template>

<script>
export default {
  setup() {
    const data = reactive({
      time: "05:12:08",
      v: "212313",
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>