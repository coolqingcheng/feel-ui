<template>
  <div class="demo1" v-loading="status" loading-text="加载中...">
    <p>给组件加上 v-loading 属性，赋值为true，可使组件上覆盖一个遮罩层</p>
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
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 15px;
  box-sizing: border-box;
}
</style>