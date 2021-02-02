<template>
  <f-tooltip>
    <template #trigger="{on}">
      <f-button text="test" v-on="on"></f-button>
      <!-- <button @mouseover="on">sfdf</button> -->
    </template>

  </f-tooltip>
</template>

<script>
export default {};
</script>

<style>
</style>