<template>
  <md>
    <template v-slot:t1>
      <demo1></demo1>
    </template>
    <template v-slot:t2>
      <demo2></demo2>
    </template>
  </md>
</template>

<script lang="ts">
import md from "./doc.md";
export default {
  components: {
    md,
  },
  setup() {},
};
</script>

<style>
</style>