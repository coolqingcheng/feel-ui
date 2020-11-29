<template>
  <span
    :class="getStatus()"
    class="f-checkbox-icon"
    @click="itemClick()"
  ></span>
</template>

<script lang="ts">
import { getCurrentInstance, ref, watch } from "vue";
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
  setup(props) {
    const status = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => {
        status.value = props.modelValue;
      }
    );

    const ctx = getCurrentInstance();

    const itemClick = () => {
      status.value = !status.value;
      ctx?.emit("update:modelValue", status);
      ctx?.emit("select", status);
    };

    const getStatus = () => {
      if (!status.value) return "f-checkbox-icon-seleced";
      if (props.indeterminate) {
        return "f-checkbox-icon-indeterminate";
      }
      return "f-checkbox-icon-unselected";
    };
    return {
      status,
      itemClick,
      getStatus,
    };
  },
};
</script>

<style>
</style>