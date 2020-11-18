<template>
  <div class="f-card">
    <div class="f-card-header">
      <slot name="header"
        ><p>{{ header }}</p></slot
      >
    </div>
    <div class="f-card-body">
      <slot></slot>
    </div>
    <div class="f-card-footer"></div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
export default {
  name: "f-card",
  props: {
    header: String,
  },
  setup() {},
};
</script>

<style>
</style>