<template>
  <f-tree
    :tree="data.data"
    @node-click="nodeClick"
    @node-check="nodeCheck"
  ></f-tree>
  <br />
  点击的是:
  <f-text :value="data.nodeClickLabel"></f-text>
  <br />
  选中的是:
  <f-text :value="data.nodeCheckLabel"></f-text>
</template>


<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    const data = reactive({
      data: [],
      nodeClickLabel: "",
      nodeCheckLabel: "",
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

    const nodeClick = (e) => {
      console.log("node-click");
      console.log(e);
      data.nodeClickLabel = e.label;
    };
    const nodeCheck = (e) => {
      console.log("node-click");
      console.log(e);
      data.nodeCheckLabel = e.label;
    };
    return {
      data,
      nodeClick,
      nodeCheck,
    };
  },
};
</script>

<style>
</style>