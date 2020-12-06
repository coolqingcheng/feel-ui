<template>
  <div class="demo1" v-loading="status" loading-text="加载中...">
    <a href="http://www.baidu.com" target="blank" title="点击跳转到百度">baidu</a>
  </div>
  <br />
  <f-switch v-model="status"></f-switch>
</template>

<script>
import { onUnmounted, ref } from "vue";
export default {
  setup() {
    const status = ref(true);
    return {
      status,
    };
  },
};
</script>

<style lang="less" scoped>
.demo1 {
  width: 300px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}
</style>