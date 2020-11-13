<template>
  <f-checkbox :data="data"></f-checkbox>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付", "paypal"],
    };
  },
};
</script>

<style>
</style>