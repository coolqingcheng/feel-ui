<template>
  <div>
    <span>{{ v }} </span>
    <div class="f-slider">
      <div class="f-slider-bar"></div>
      <SliderSelector :value="v1" @change="testChange"></SliderSelector>
      <SliderSelector :value="v2" @change="testChange1"></SliderSelector>
    </div>
  </div>
</template>

<script>
import SliderSelector from "./SliderSelector";
export default {
  name: "f-slider",
  components: {
    SliderSelector,
  },
  props: {
    modelValue: {
      type: Number,
    },
  },
  data() {
    return {
      v1: 20,
      v: 0,
      v2: 50,
      vv: 0,
    };
  },
  methods: {
    testChange(e) {
      console.log(e);
      this.v = e.value;
    },
    testChange1(e) {
      console.log(e);
      this.v = e.value;
    },
  },
};
</script>

<style>
</style>