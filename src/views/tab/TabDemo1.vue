<template>
  <f-tab>
    <f-tab-item :title="'tab' + item" v-for="item in 15" :key="item">
      tab:{{ item }}
    </f-tab-item>
  </f-tab>
</template>

<script>
export default {};
</script>

<style>
</style>