<template>
  <div class="c-switch" @click="switchClick()" :class="[modelValue?'c-switch-open-bg':'']">
    <span class="c-switch-icon" :class="[modelValue?'c-switch-icon-open':'c-switch-icon-close']"></span>
  </div>
</template>

<script>
export default {
  name: "f-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    switchClick() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style>
</style>