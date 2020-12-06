<template>
  <f-table :header="data.header" :data="data.data" idkey="id" selector="radio">
  </f-table>
</template>

<script>
import { onMounted, reactive } from "vue";
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
      data: [],
    });

    onMounted(() => {
      for (let i = 0; i < 10; i++) {
        data.data.push({
          id: i,
          userName: "feel:" + i,
          sex: i % 2 == 0 ? 0 : 1,
          city: "city:" + i,
          sign: "feel-ui简单且好用:" + i,
        });
      }
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>