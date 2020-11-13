<template>
  <form class="f-form" @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
import mitt from "mitt";
export default {
  name: "f-form",
  props: {
    // 表单模型
    model: {
      type: Object,
      default: () => {},
    },
    //验证规则
    rules: {
      type: Object,
      default: () => {},
    },
    labelWidth: {
      type: Number,
      default: 80,
    },
  },
  
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      event: mitt(),
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style>
</style>