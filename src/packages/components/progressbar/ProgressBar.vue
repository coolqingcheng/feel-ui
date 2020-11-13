<template>
  <div class="f-progress-bar" :class="['f-progress-bar-' + size]">
    <div class="f-progress-bg" ref="bg">
      <div
        class="f-progress-color"
        ref="color"
        :style="{ width: progressValue, backgroundColor: color }"
      ></div>
    </div>
    <div class="f-progress-txt" v-if="showLabel">
      <span class="txt">{{ progressValue }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, watch } from "vue";
export default {
  name: "f-progress-bar",
  props: {
    bg: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#000",
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (v: string) {
        return ["medium", "small", "large"].indexOf(v) !== -1;
      },
    },
  },
  setup(props, context) {
    const data = reactive({
      minV: props.modelValue,
      maxV: 100,
    });
    const update = () => {
      console.log("update:" + data.minV);
      setTimeout(() => {
        context.emit("update:modelValue", data.minV);
      }, 1);
    };
    watch(
      () => props.modelValue,
      () => {
        console.log(props.modelValue);
        if (props.modelValue > 100 || data.minV > 100) {
          data.minV = 100;
        } else {
          data.minV = props.modelValue;
        }
        if (props.modelValue <= 0 || data.minV <= 0) {
          data.minV = 0;
          console.log("归0");
        }

        update();
      }
    );
    const progressValue = computed(() => {
      let value = Math.floor((data.minV / data.maxV) * 100);
      let str = value + "%";
      if (str === "100%") {
        context.emit("complete", {
          value: value,
        });
      }
      return str;
    });
    return {
      progressValue,
    };
  },
};
</script>

<style>
</style>