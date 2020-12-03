<template>
  <f-button text="打开对话框" @click="open"></f-button>
  <f-dialog
    :show="data.status"
    @close="data.status = false"
    title="测试标题"
    :close-before="closeBefore"
  >
    点击关闭按钮,3秒后自动关闭
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
    const closeBefore = (done) => {
      console.log("关闭操作");
      setTimeout(() => {
        done();
      }, 3000);
    };
    return {
      data,
      open,
      closeBefore,
    };
  },
};
</script>

<style>
</style>