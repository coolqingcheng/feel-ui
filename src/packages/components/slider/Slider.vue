<template>
  <div>
    <span>{{ data.v }} </span>
    <div class="f-slider">
      <div class="f-slider-bg"></div>
      <div class="f-slider-bar" :style="{width:data.width}"></div>
      <SliderSelector :value="data.v1" @change="testChange"></SliderSelector>
      <SliderSelector :value="data.v2" @change="testChange1"></SliderSelector>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import SliderSelector from "./SliderSelector.vue";
export default {
  name: "f-slider",
  components: {
    SliderSelector,
  },
  props: {
    modelValue: {
      type: Number,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    range: {
      type: [Number, Array],
      required: true,
    },
  },
  setup() {
    const data = reactive({
      v1: 20,
      v: 0,
      v2: 50,
      vv: 0,
      width: "0",
      //1 值 2 范围
      type: 1,
    });
    const testChange = (e: { value: number; max: number }) => {
      // console.log(e);
      data.v = Math.round((e.value / e.max) * 100);
      data.width = `${(e.value / e.max) * 100}%`;
    };
    const testChange1 = (e: { value: number; max: number }) => {
      console.log(e);
      // data.v = Math.round((e.value / e.max) * 100);
    };

    return {
      testChange,
      testChange1,
      data,
    };
  },
};
</script>

<style>
</style>