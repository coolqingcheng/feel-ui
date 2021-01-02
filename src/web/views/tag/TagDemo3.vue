<template>
  <f-tag v-model="data.list" :edit="false" style="fill"></f-tag>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      list: [
        "标签1",
        { name: "标签2", type: "success" },
        "标签3",
        { name: "标签4", type: "danger" },
        "标签5",
      ],
    });
    return {
      data,
    };
  },
};
</script>