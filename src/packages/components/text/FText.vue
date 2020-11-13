<template>
  <label class="f-text" :style="{ color: color, backgroundColor: bg }">{{
    value
  }}</label>
</template>

<script>
export default {
  name: "f-text",
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    bg: {
      type: String,
    },
  },
};
</script>

<style>
</style>