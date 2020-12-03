<template>
  <f-button text="打开对话框" @click="open"></f-button>
  <f-dialog :show="data.status" @close="data.status = false" title="测试标题">
    <f-button @click="childDialog()" text="打开子窗口"></f-button>
    <f-dialog
      :show="data.childDialog"
      @close="data.childDialog = false"
      title="子窗口"
      :width="300"
    >
      我的窗口
    </f-dialog>
  </f-dialog>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      status: false,
      childDialog: false,
    });
    const open = () => {
      data.status = true;
    };
    const childDialog = () => {
      data.childDialog = true;
    };
    return {
      data,
      open,
      childDialog,
    };
  },
};
</script>

<style>
</style>