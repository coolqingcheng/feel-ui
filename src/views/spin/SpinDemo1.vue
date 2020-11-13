<template>
  <f-spin :loading="data.show">
    <div class="content">
      包裹某一个或者多个组件页面，使用其处于加载中的状态
    </div>
  </f-spin>
  <br />
  <f-button
    :text="'点击修改状态:' + data.show"
    @click="updateStatus"
  ></f-button>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      show: false,
    });
    const updateStatus = () => {
      data.show = !data.show;
    };
    return {
      data,
      updateStatus,
    };
  },
};
</script>

<style>
.content {
  display: flex;
  padding: 15px;
  border: 1px solid #ccc;
}
</style>