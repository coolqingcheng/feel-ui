<template>
  <div
    class="f-switch"
    @click="switchClick()"
    :class="[modelValue ? 'f-switch-bg' : 'f-switch-bg-close']"
  >
    <span
      class="f-switch-icon"
      :class="[modelValue ? 'f-switch-icon-open' : 'f-switch-icon-close']"
    ></span>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
export default {
  name: "f-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    let formItem = <any>inject("form-item");
    const emitData = (type: string) => {
      if (formItem) {
        formItem.update({
          type: type,
          value: props.modelValue,
        });
      }
    };
    const switchClick = () => {
      context.emit("update:modelValue", !props.modelValue);
      emitData("change");
    };

    return {
      switchClick,
    };
  },
};
</script>

<style>
</style>