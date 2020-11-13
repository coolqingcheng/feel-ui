<template>
  <div class="f-app">
    <div class="f-hader-bar">
      <slot name="header"></slot>
    </div>
    <main class="f-main">
      <div class="f-left-menu">
        <slot name="left-menu"></slot>
      </div>
      <div class="f-content">
        <slot name="content"></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "f-app-layout",
  
};
</script>

<style>
</style>