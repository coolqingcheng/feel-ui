<template>
  <f-switch v-model="data.status"></f-switch>
</template>

<script>
import Switch from "@/packages/components/switch/Switch.vue";
import { reactive } from "vue";
export default {
  components: { Switch },
  setup() {
    const data = reactive({
      status: false,
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>