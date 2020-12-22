<template>
  <div class="f-table-checkbox">
    <span
      class="f-checkbox-icon"
      @click="itemClick"
      :class="[
        data.value == false
          ? 'f-checkbox-icon-unselected'
          : 'f-checkbox-icon-seleced',
      ]"
    ></span>
  </div>
</template>

<script lang="ts">
import { reactive, watch } from "vue";
export default {
  name: "f-table-checkbox",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const data = reactive({
      value: props.status,
    });

    watch(
      () => props.status,
      () => {
        data.value = props.status;
      }
    );
    const itemClick = () => {
      context.emit("change", { value: !data.value });
    };

    return {
      data,
      itemClick,
    };
  },
};
</script>

<style>
</style>