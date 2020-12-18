<template>
  <f-row align="left">
    <f-col direction="h">
      <span class="f-align-center">选择弹出方向</span>
      <f-radio
        :data="data.direction"
        class="m-l-2"
        v-model="data.default"
      ></f-radio
      ><f-switch class="m-l-2" v-model="data.show"></f-switch>
    </f-col>
  </f-row>
  <f-drawer v-model="data.show" :direction="data.default" :height="350"> test </f-drawer>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      direction: ["left", "right", "top", "bottom"],
      default: "bottom",
      show: false,
      
    });
    const showClick = () => {
      data.show = !data.show;
    };
    return {
      data,
      showClick,
    };
  },
};
</script>

<style>
</style>