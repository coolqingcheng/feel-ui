<template>
  <f-tooltip direction="left" msg="left">
    <template #trigger="{on}">
      <f-button text="hover-left" v-on="on" class="m-r-3"></f-button>
    </template>
  </f-tooltip>
  <f-tooltip direction="top" msg="top">
    <template #trigger="{on}">
      <f-button text="hover-top" v-on="on" class="m-r-3"></f-button>
    </template>
  </f-tooltip>
  <f-tooltip direction="right" msg="right">
    <template #trigger="{on}">
      <f-button text="hover-right" v-on="on" class="m-r-3"></f-button>
    </template>
  </f-tooltip>
  <f-tooltip direction="bottom" trigger="click" msg="bottom">
    <template #trigger="{on}">
      <f-button text="click trigger" v-on="on"></f-button>
    </template>
  </f-tooltip>
</template>

<script>
export default {};
</script>

<style>
</style>