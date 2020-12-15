<template>
  <f-button @click="show" text="弹出提示框"></f-button>
</template>

<script>
import { getCurrentInstance } from "vue";

import { ShowAlert } from "../../../packages/utils/FUtils"; //在项目中引用 feelui-vue/bin/utils/FUtils
export default {
  setup() {
    const ctx = getCurrentInstance();
    const show = () => {
      
      ShowAlert(ctx,"提示内容区域","测试标题",(status)=>{
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