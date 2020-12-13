<template>
  <div class="f-circular" style="width: 200px; height: 200px">
    <svg
      id="svgForStroke"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path
        d="
      M 50 10 
      A 40 40 0 1 1 50 90 
      A 40 40 0 1 1 50 10
      "
        fill="none"
        class="f-circular-bg"
        :stroke-width="width"
      ></path>
      <path
        d="
      M 50 10
      A 40 40 0 1 1 50 90 
      A 40 40 0 1 1 50 10
      "
        fill="none"
        :stroke="color"
        class="progres f-circular-bar"
        :stroke-width="width"
        :stroke-dasharray="progressValue"
        :stroke-linecap="round ? 'round' : ''"
      ></path>
    </svg>
    <div class="f-circular-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  toRef,
  watch,
} from "vue";

export default defineComponent({
  name: "f-circular",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 5,
    },
    color: {
      type: String,
      default: "#28a745",
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { emit } = context;
    const progressValue = computed(() => {
      let value = props.modelValue;
      if (value < 0) {
        value = 0;
        emit("update:modelValue", value);
      }
      if (value > 100) {
        value = 100;
        emit("update:modelValue", value);
      }
      return `${(value / 100) * (Math.PI * 2 * 40)}px,${Math.PI * 2 * 40}px`;
    });

    const widthValue = computed(() => {
      if (props.modelValue > 0) {
        return props.width;
      }
      return 0;
    });



    return {
      progressValue,
      widthValue,
    };
  },
});
</script>

<style>
/* .progress {
  animation: rotate 1500ms linear both;
}
@keyframes rotate {
  from {
    stroke-dashoffset: 471px;
  }
  to {
    stroke-dashoffset: 0px;
  }
} */
</style>