<template>
  <f-table :header="data.header"></f-table>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      header: [
        {
          field: "id",
          title: "ID",
          width: 100,
        },
        {
          field: "sex",
          title: "性别",
          width: 200,
        },
        {
          field: "userName",
          title: "姓名",
          width: 100,
        },
        {
          field: "city",
          title: "城市",
          width: 200,
        },
        {
          field: "sign",
          title: "签名",
        },
      ],
      data:[]
    });

    return {
      data,
    };
  },
};
</script>

<style>
</style>