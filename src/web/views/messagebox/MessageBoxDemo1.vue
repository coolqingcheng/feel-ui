<template>
  <f-button @click="show" text="弹出提示框"></f-button>
</template>

<script>
import { getCurrentInstance } from "vue";

import { ShowMessageBox } from "../../../packages/utils/FUtils"; //在项目中引用 eelui-vue/bin/utils/FUtils
export default {
  setup() {
    const ctx = getCurrentInstance();
    const show = () => {
      console.log(ctx);
      ShowMessageBox(ctx,"提示内容区域","测试标题",(status)=>{
        console.log(status);
      })
    };
    return {
      show,
    };
  },
};
</script>

<style>
</style>