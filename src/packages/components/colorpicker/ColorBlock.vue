<template>
  <div class="f-colorblock">
    <div :style="{ background: rgb }"></div>
  </div>
</template>

<script>
import { computed, reactive, watch } from "vue";
const tinycolor = require("tinycolor2");

export default {
  name: "f-colorblock",
  props: {
    color: String,
  },
  setup(props) {
    const rgb = computed(() => {
      return tinycolor(props.color).toRgbString();
    });
    return {
      rgb,
    };
  },
};
</script>

<style>
</style>