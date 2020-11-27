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
import { getCurrentInstance, inject } from "vue";
import { FormItemInject, formItemInjectKey } from "../form/formOption";
export default {
  name: "f-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const ctx = getCurrentInstance();
    let formItem = inject<FormItemInject>(
      formItemInjectKey,
      {} as FormItemInject
    );
    const emitData = (type: string) => {
      if (formItem.update)
        formItem.update({
          type: type,
          value: props.modelValue,
        });
    };
    const switchClick = () => {
      context.emit("update:modelValue", !props.modelValue);
      ctx?.emit("change", {
        value: !props.modelValue,
      });
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