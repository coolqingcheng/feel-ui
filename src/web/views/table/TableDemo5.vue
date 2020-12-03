<template>
  <f-table :header="header5" :data="data" idkey="id" @sort="tableSort($event)">
    <template v-slot:sex="item">
      <span style="color: red" v-if="item.sex == 0">男</span>
      <span style="color: green" v-if="item.sex == 1">女</span>
    </template>
  </f-table>
</template>

<script>
export default {
  data() {
    return {
      data: [],
       header5: [
        {
          type: "checkbox",
          width: 80,
        },
        {
          field: "id",
          title: "ID",
          width: 100,
          sort: true,
        },
        {
          field: "sex",
          title: "性别",
          width: 200,
          slot: true,
          sort: true,
        },
        {
          field: "userName",
          title: "姓名",
          width: 100,
          sort: true,
        },
        {
          field: "city",
          title: "城市",
          width: 200,
          sort: true,
        },
        {
          field: "sign",
          title: "签名",
          sort: true,
        },
      ],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.data.push({
        id: i,
        userName: "feel:" + i,
        sex: i % 2 == 0 ? 0 : 1,
        city: "city:" + i,
        sign: "feel-ui简单且好用:" + i,
      });
    }
  },
   methods: {
    tableSort(e) {
      console.log(e);
      //使用e.field获取排序字段,e.sort获取排序方式 desc | asc
    },
  },
};
</script>

<style>
</style>