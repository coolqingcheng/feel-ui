<template>
  <md>
    <template v-slot:t1>
      <f-input></f-input>
    </template>
    <template v-slot:t2>
      <f-input hint="这是一个提示语"></f-input>
    </template>
    <template v-slot:t3>
      <f-input type="password"></f-input>
    </template>
    <template v-slot:t4>
      <f-input type="textarea"></f-input>
    </template>
    <template v-slot:t5>
      <span>输入框的值:{{ text }}</span>
      <f-input v-model="text"></f-input>
    </template>
  </md>
</template>

<script>
import md from "./doc.md";
export default {
  components: {
    md,
  },
  data() {
    return {
      text: "feel-ui简单易用",
    };
  },
};
</script>

<style>
</style>