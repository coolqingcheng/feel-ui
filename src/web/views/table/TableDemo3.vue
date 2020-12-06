<template>
  <f-table :header="data.header" :data="data.data" idkey="id">
    <template v-slot:sex="item">
      <span style="color: red" v-if="item.sex == 0">男</span>
      <span style="color: green" v-if="item.sex == 1">女</span>
    </template>
  </f-table>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      data: [],
      header: [
        {
          type: "radio",
          width: 60,
        },
        {
          field: "id",
          title: "ID",
          width: 100,
        },
        {
          field: "sex",
          title: "性别",
          width: 200,
          slot: true,
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