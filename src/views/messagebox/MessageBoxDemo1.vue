<template>
  <f-button @click="show" text="弹出提示框"></f-button>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const ctx = getCurrentInstance();
    const show = () => {
      console.log(ctx);
      ctx.appContext.config.globalProperties.$alert({
        title: "标题",
        content:
          "模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。",
      });
    };
    return {
      show,
    };
  },
};
</script>

<style>
</style>