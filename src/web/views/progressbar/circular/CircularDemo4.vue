<template>
  <f-row>
    <f-col>
      <f-circular :width="10" v-model="value" :round="true">
        <span>cpu负载{{ value }}%</span>
      </f-circular>
    </f-col>
    <f-col>
      <f-circular :width="10" v-model="value" :round="true">
        <span>内存负载{{ value }}%</span>
      </f-circular>
    </f-col>
    <f-col>
      <f-circular :width="10" v-model="value" :round="true">
        <span>订单完成量{{ value }}%</span>
      </f-circular>
    </f-col>
  </f-row>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(66);

    return {
      value,
    };
  },
};
</script>

<style>
</style>