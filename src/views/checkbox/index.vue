<template>
  <md>
    <template v-slot:t1>
      <demo1></demo1>
    </template>
    <template v-slot:t2>
      <demo2></demo2>
    </template>
    <template v-slot:t3>
      <demo3></demo3>
    </template>
  </md>
</template>

<script>
import md from "./doc.md";
import demo1 from "./demo1";
import demo2 from "./demo2";
import demo3 from "./demo3";
export default {
  components: {
    md,
    demo1,
    demo2,
    demo3,
  },
};
</script>

<style>
</style>