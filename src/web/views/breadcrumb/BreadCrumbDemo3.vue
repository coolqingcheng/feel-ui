<template>
  <f-breadcrumb>
    <f-breadcrumb-item path="/"
      >主页
      <template #separator>
        <f-icon icon="arrow-right"></f-icon>
      </template>
    </f-breadcrumb-item>
    <f-breadcrumb-item path="/breadcrumb"
      >面包屑
      <template #separator>
        <f-icon icon="arrow-right"></f-icon>
      </template>
    </f-breadcrumb-item>
    <f-breadcrumb-item path="/breadcrumb"
      >测试
      <template #separator>
        <f-icon icon="arrow-right"></f-icon>
      </template>
    </f-breadcrumb-item>
  </f-breadcrumb>
</template>

<script>
export default {};
</script>

<style>
</style>