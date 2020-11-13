<template>
  <f-radio :data="data" v-model="value"></f-radio>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付"],
      value: "支付宝",
    };
  },
};
</script>

<style>
</style>