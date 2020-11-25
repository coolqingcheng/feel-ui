<template>
  <div class="f-row" :class="css">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "f-row",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (v) => {
        return ["left", "center", "right"].indexOf(v) > -1;
      },
    },
  },
  setup(props) {
    const css = computed(() => {
      return `f-${props.align}`;
    });
    return {
      css,
    };
  },
};
</script>

<style>
</style>