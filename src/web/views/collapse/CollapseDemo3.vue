<template>
  <f-collapse :type="1">
    <f-collapse-panel id="1">
      <template #header>头部</template>
      <template #body> 折叠面板的body </template>
    </f-collapse-panel>
    <f-collapse-panel id="2">
      <template #header>头部</template>
      <template #body> 折叠面板的body </template>
    </f-collapse-panel>
    <f-collapse-panel id="3">
      <template #header>头部</template>
      <template #body> 折叠面板的body </template>
    </f-collapse-panel>
  </f-collapse>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
</style>