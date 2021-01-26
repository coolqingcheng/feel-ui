<template>
  <div class="f-empty">
    <Icon icon="meh" :width="30"></Icon>
    <span class="f-empty-text m-t-1">暂无数据</span>
  </div>
</template>

<script lang="ts">
import Icon from "../icon/Icon.vue";
export default {
  name: "f-empty",
  components: {
    Icon,
  },
};
</script>

<style>
</style>