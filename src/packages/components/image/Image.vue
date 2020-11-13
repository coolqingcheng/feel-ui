<template>
  <img class="f-img" />
</template>

<script>
export default {
  name: "f-image",
  props: {
    radius: {
      type: Number,
      default: 0,
    },
    border: {
      type: Number,
      default: 0,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "0",
    },
    height: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>