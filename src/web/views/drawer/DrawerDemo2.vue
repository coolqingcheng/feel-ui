<template>
  <f-switch v-model="data.show"></f-switch>
  <f-drawer v-model="data.show">
    <f-button text="打开另一个抽屉" @click="showClick"></f-button>
    <f-drawer v-model="data.childShow" direction="right"></f-drawer>
  </f-drawer>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      show: false,
      childShow: false,
    });
    const showClick = ()=>{
        data.childShow = true;
    }
    return {
      data,
      showClick
    };
  },
};
</script>

<style>
</style>