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
    <template v-slot:t4>
      <demo4></demo4>
    </template>
  </md>
</template>

<script>
import demo1 from "./treedemo1";
import md from "./doc.md";
import demo2 from "./treedemo2";
import demo3 from "./treedemo3";
import demo4 from "./treedemo4";
export default {
  components: {
    demo1,
    md,
    demo2,
    demo3,
    demo4,
  },
};
</script>

<style>
</style>