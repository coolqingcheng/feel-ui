<template>
  <div class="f-row" :class="css">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from "vue";
export interface RowInject {
  gutter: number;
}
export default defineComponent({
  name: "f-row",
  props: {
    align: {
      type: String,
      default: "start",
      validator: (v: string) => {
        return ["start", "center", "end"].indexOf(v) > -1;
      },
    },
    gutter: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    provide<RowInject>("row", { gutter: props.gutter });
    const css = computed(() => {
      return `f-${props.align}`;
    });
    return {
      css,
    };
  },
});
</script>

<style>
</style>