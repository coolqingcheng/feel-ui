<template>
  <f-button text="弹出通知消息" @click="notify"></f-button>
</template>

<script>
import { getCurrentInstance } from "vue";
import { ShowNotify, MessageType } from "../../../packages/utils/FUtils";
export default {
  setup() {
    const ctx = getCurrentInstance();
    const notify = () => {
      console.log("click");
      ShowNotify(ctx, MessageType.SUCCESS, "title", "content", () => {
        console.log("关闭回调");
      });
    };
    return {
      notify,
    };
  },
};
</script>

<style>
</style>