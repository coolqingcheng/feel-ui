<template>
  <div class="f-modal">
    <!-- <transition name="mask">
      <div class="f-modal-mask" v-if="maskShow"></div>
    </transition> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-modalbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      maskShow: false,
    };
  },
  mounted() {
    this.maskShow = true;
  },
};
</script>

<style>
</style>