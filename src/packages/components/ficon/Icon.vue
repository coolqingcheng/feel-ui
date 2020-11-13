<template>
  <span class="f-icon" :class="[icon != '' ? icon : '']"></span>
</template>

<script>
export default {
  name: "f-icon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>