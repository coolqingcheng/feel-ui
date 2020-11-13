<template>
  <transition name="mask">
    <div class="f-modal-mask" v-if="maskShow"></div>
  </transition>
</template>

<script>
export default {
  name: "f-modal-mask",
  props: {
    maskShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>