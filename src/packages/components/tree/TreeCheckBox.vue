<template>
  <div class="f-tree-checkbox">
    <div
      class="f-tree-checkbox-item"
      @click="itemClick()"
      :class="[modelValue == false ? '' : 'checkbox-select']"
    >
      <!-- <span class="f-icon" :class="[getStatus()]"></span> -->
      <f-icon :icon="getStatus()"></f-icon>
    </div>
  </div>
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
      if (!this.status) return "icon-uncheck";
      if (this.indeterminate) {
        return "icon-indeterminate";
      }
      return "icon-checked";
    },
  },
};
</script>

<style>
</style>