<template>
  <f-button @click="show" text="弹出Message"></f-button>
</template>

<script>
import { getCurrentInstance } from "vue";

import { ShowMessage,MessageType } from "../../../packages/utils/FUtils"; //在项目中引用 feelui-vue/bin/utils/FUtils
export default {
  setup() {
    const ctx = getCurrentInstance();
    const show = () => {
      
      ShowMessage(ctx,MessageType.SUCCESS,"测试标题",(status)=>{
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