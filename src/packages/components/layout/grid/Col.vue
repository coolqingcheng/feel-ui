<template>
  <div
    class="f-col"
    v-bind:class="css"
    :style="{ order: order, padding: padding / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, reactive } from "vue";

import { RowInject } from "./Row.vue";

export default defineComponent({
  name: "f-col",
  props: {
    order: {
      type: Number,
      default: 1,
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
    /**方向 */
    direction: {
      type: String,
      default: "h",
      validator: (v: string) => ["h", "v"].indexOf(v) > -1,
    },
    align: {
      type: String,
      default: "start",
      validator: (v: string) => {
        return ["start", "center", "end"].indexOf(v) > -1;
      },
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
      if (props.direction == "v") {
        classList.push("f-flex-v");
      } else {
        classList.push("f-flex-h");
      }
      if (props.align) {
        classList.push(`f-${props.align}`);
      }
      return classList.join(" ");
    });
    const data = reactive({
      qc: "sadfasdf",
    });
    const row = inject<RowInject>("row", { gutter: 10 });

    const padding = computed(() => {
      return row.gutter;
    });

    return {
      css,
      data,
      padding,
    };
  },
});
</script>

<style>
</style>