<template>
  <div class="f-col" v-bind:class="css">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "f-col",
  props: {
    order: {
      type: String,
    },
    col: {
      type: Number,
    },
    xs: {
      type: Number,
    },
    sm: {
      type: Number,
    },
    md: {
      type: Number,
    },
    lg: {
      type: Number,
    },
    xl: {
      type: Number,
    },
  },
  setup(props) {
    const css = computed(() => {
      let classList: string[] = [];
      if (props.col) {
        classList.push(`f-col-${props.col}`);
      }
      if (props.xs) {
        classList.push(`f-col-xs-${props.xs}`);
      }
      if (props.sm) {
        classList.push(`f-col-sm-${props.sm}`);
      }
      if (props.md) {
        classList.push(`f-col-md-${props.md}`);
      }
      if (props.lg) {
        classList.push(`f-col-lg-${props.lg}`);
      }
      if (props.xl) {
        classList.push(`f-col-xl-${props.xl}`);
      }
      return classList.join(" ");
    });
    const data = reactive({
      qc: "sadfasdf",
    });
    return {
      css,
      data,
    };
  },
});
</script>

<style>
</style>