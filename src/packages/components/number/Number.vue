<template>
  <div
    class="f-num"
    @keyup.up="operaAdd($event)"
    @keyup.down="operaSub($event)"
    @mousewheel="mousewheel($event)"
    ref="num"
  >
    <span class="f-num-sub" @click="operaSub()">
      <f-icon icon="minus"></f-icon>
    </span>
    <input
      type="text"
      :value="data.value"
      @change="change"
      @keydown.up="keydown"
    />
    <span class="f-num-add" @click="operaAdd()">
      <f-icon icon="plus"></f-icon>
    </span>
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance,
  reactive,
  inject,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
import math from "../../utils/MathUtils";
import { formItemInjectKey, FormItemInject } from "../form/formOption";
import "default-passive-events";
export default {
  name: "f-number",
  props: {
    step: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    min: Number,
    max: Number,
  },
  setup(props) {
    let ctx = getCurrentInstance();
    const data = reactive({
      value: 0,
    });
    const change = (e) => {
      console.log(e);

      if (math.isNumber(e.target.value)) {
        let num = Number(e.target.value);
        data.value = num;
        if (props.max) {
          if (num >= props.max) {
            data.value = props.max;
          }
        }
        if (props.min) {
          if (num <= props.min) {
            data.value = props.min;
          }
        }
      } else {
        //如果不是数字，那么刷新
        data.value = data.value;
        ctx?.update();
      }
    };
    const formItem = inject<FormItemInject>(
      formItemInjectKey,
      {} as FormItemInject
    );
    const emitData = (type: string) => {
      if (formItem.update) {
        formItem.update({
          type: type,
          value: props.modelValue,
        });
      }
    };

    const update = () => {
      ctx?.emit("update:modelValue", data.value);
      ctx?.emit("change", { value: data.value });
      emitData("change");
    };

    const operaAdd = () => {
      if (props.max) {
        data.value = math.floatAdd(data.value, props.step);
        if (data.value >= props.max) data.value = props.max;
      } else {
        data.value = math.floatAdd(data.value, props.step);
      }
      update();
    };
    const operaSub = () => {
      if (props.min) {
        data.value = math.floatSub(data.value, props.step);
        if (data.value < props.min) data.value = props.min;
      } else {
        data.value = math.floatSub(data.value, props.step);
      }
      update();
    };

    const keydown = (e) => {
      e.preventDefault();
    };

    const mousewheel = (e: WheelEvent) => {
      if (e["wheelDelta"] > 0) {
        operaAdd();
      } else {
        operaSub();
      }
    };
    return {
      data,
      change,
      operaAdd,
      operaSub,
      keydown,
      mousewheel,
    };
  },
};
</script>

<style>
</style>