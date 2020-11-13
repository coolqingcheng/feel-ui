<template>
  <div class="f-line" :style="[model == 'v' ? 'display:inline-block' : '']">
    <div :class="[model == 'h' ? 'f-line-h' : 'f-line-v']"></div>
  </div>
</template>

<script>
export default {
  name: "f-line",
  props: {
    /**
     * 参数h 横 v竖
     */
    model: {
      type: String,
      default: "h",
    },
  },
};
</script>

<style>
</style>