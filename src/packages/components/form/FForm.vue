<template>
  <form class="f-form" @submit="submit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import mitt from "mitt";
import { onUnmounted, provide, reactive, watch } from "vue";
import schema from "async-validator";
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

  setup(props) {
    const data = reactive({
      labelWidth: props.labelWidth,
      model: props.model,
    });

    const event = mitt();
    provide("form", {
      data: data,
      rules: props.rules,
    });
    const submit = () => {};

    onUnmounted(() => {
      event.all.clear();
    });

    watch(
      () => data.model,
      () => {
        console.log("model被子组件修改");
      }
    );
    return {
      event,
      submit,
    };
  },
};
</script>

<style>
</style>