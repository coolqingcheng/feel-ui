<template>
  <f-button @click="show" text="弹出提示框"></f-button>
</template>

<script>
import { showMessageBox } from "@/packages/utils/feel";
export default {
  setup() {
    const show = () => {
      showMessageBox({
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