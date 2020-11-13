<template>
  <f-radio :data="data" v-model="value" :disables="disables"></f-radio>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付"],
      value: "支付宝",
      disables: ["微信"],
    };
  },
};
</script>

<style>
</style>