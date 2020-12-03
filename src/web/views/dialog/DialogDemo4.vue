<template>
  <f-button text="打开对话框" @click="open"></f-button>
  <f-dialog :show="data.status" @close="data.status = false" title="测试标题">
    <template v-slot:header>
      <f-icon icon="icon-add"></f-icon>
      <span style="color: red">表头标题</span>
    </template>
    内容
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
    return {
      data,
      open,
    };
  },
};
</script>