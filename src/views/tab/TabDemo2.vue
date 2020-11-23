<template>
  <f-tab :show-close="true" @close="close">
    <f-tab-item :title="item" v-for="item in data.list" :key="item">
      tab:{{ item }}
    </f-tab-item>
  </f-tab>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      list: [],
    });
    for (let i = 0; i < 5; i++) {
      data.list.push("tab" + i);
    }

    const close = (item) => {
      console.log(item.title);
    };
    return {
      data,
      close,
    };
  },
};
</script>

<style>
</style>