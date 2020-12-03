<template>
  <f-color-picker
    format="rgb"
    v-model="data.color"
    :alpha="true"
    :colors="data.colors"
  >
    <f-colorblock :color="data.color"></f-colorblock>
  </f-color-picker>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      color: "#ff7300",
      colors: ["#000", "#ccc", "red", "#ddd", "green", "blue", "#000", "#ccc"],
    });
    return {
      data,
    };
  },
};
</script>