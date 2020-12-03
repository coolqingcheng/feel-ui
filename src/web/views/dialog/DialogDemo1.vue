<template>
  <f-button text="打开对话框" @click="open"></f-button>
  <f-dialog :show="data.status" @close="data.status = false" title="测试标题">
    窗口内容
  </f-dialog>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      status: false,
    });
    const open = () => {
      data.status = true;
    };
    return {
      data,
      open,
    };
  },
};
</script>

<style>
</style>