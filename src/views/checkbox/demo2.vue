<template>
  <f-checkbox :data="data" v-model="value"></f-checkbox>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付", "paypal"],
      value: ["支付宝", "微信"],
    };
  },
};
</script>

<style>
</style>