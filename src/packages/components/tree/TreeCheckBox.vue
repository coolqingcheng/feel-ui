<template>
  <span
    :class="getStatus()"
    class="f-checkbox-icon"
    @click="itemClick()"
  ></span>
</template>

<script>
export default {
  name: "f-tree-checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      status: this.modelValue,
    };
  },
  watch: {
    modelValue() {
      this.status = this.modelValue;
    },
  },
  methods: {
    itemClick() {
      this.status = !this.status;
      this.$emit("update:modelValue", this.status);
      this.$emit("select", this.status);
    },
    getStatus() {
      if (!this.status) return "f-checkbox-icon-seleced";
      if (this.indeterminate) {
        return "f-checkbox-icon-indeterminate";
      }
      return "f-checkbox-icon-unselected";
    },
  },
};
</script>

<style>
</style>