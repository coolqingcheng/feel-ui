<template>
  <div
    :class="[
      'f-col',
      grid.sm ? `f-col-sm-${grid.sm}` : '',
      grid.md ? `f-col-md-${grid.md}` : '',
      grid.lg ? `f-col-lg-${grid.lg}` : '',
      grid.xl ? `f-col-xl-${grid.xl}` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "f-col",
  props: {
    
  },
  setup(props) {},
});
</script>

<style>
</style>