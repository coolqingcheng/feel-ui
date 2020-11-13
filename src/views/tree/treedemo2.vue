<template>
  <f-tree :tree="data.data"></f-tree>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    const data = reactive({
      data: [],
    });
    data.data = [
      {
        label: "四川省",
        expand: true,
        children: [
          {
            label: "成都市",
          },
          {
            label: "绵阳市",
            children: [
              {
                label: "安州区",
                checked: true,
              },
              {
                label: "游仙区",
              },
            ],
          },
          {
            label: "南充市",
            children: [
              {
                label: "嘉陵区",
              },
            ],
          },
        ],
      },
      {
        label: "重庆市",
        children: [
          {
            label: "万州区",
          },
          {
            label: "江北区",
          },
        ],
      },
    ];

    return {
      data,
    };
  },
};
</script>

<style>
</style>