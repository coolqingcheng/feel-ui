<template>
  <md>
    <template v-slot:t1>
      <f-table :header="header" :data="data" idkey="id" selector="radio">
      </f-table>
    </template>

    <template v-slot:t2>
      <f-table :header="header2" :data="data" idkey="id">
        <template v-slot:sex="item">
          <span style="color: red" v-if="item.sex == 0">男</span>
          <span style="color: green" v-if="item.sex == 1">女</span>
        </template>
      </f-table>
    </template>
    <template v-slot:t3>
      <f-table :header="header3" :data="data" idkey="id">
        <template v-slot:sex="item">
          <span style="color: red" v-if="item.sex == 0">男</span>
          <span style="color: green" v-if="item.sex == 1">女</span>
        </template>
      </f-table>
    </template>
    <template v-slot:t4>
      <f-table :header="header4" :data="data" idkey="id">
        <template v-slot:sex="item">
          <span style="color: red" v-if="item.sex == 0">男</span>
          <span style="color: green" v-if="item.sex == 1">女</span>
        </template>
      </f-table>
    </template>
    <template v-slot:t5>
      <f-table
        :header="header5"
        :data="data"
        idkey="id"
        @sort="tableSort($event)"
      >
        <template v-slot:sex="item">
          <span style="color: red" v-if="item.sex == 0">男</span>
          <span style="color: green" v-if="item.sex == 1">女</span>
        </template>
      </f-table>
    </template>
  </md>
</template>
<script>
import md from "./doc.md";
export default {
  components: {
    md,
  },
  data() {
    return {
      header: [
        {
          type: "checkbox",
        },
        {
          field: "id",
          title: "ID",
          width: 100,
          align: "center",
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

      header2: [
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
      header3: [
        {
          type: "radio",
          width: 80,
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
      header4: [
        {
          type: "checkbox",
          width: 80,
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