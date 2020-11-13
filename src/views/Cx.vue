<template>
  <div class="app">
    <f-button text="button"></f-button>
    <f-tree
      ref="tree"
      type="1"
      :data="treeData"
      @tree-node-click="nodeTestClick"
    ></f-tree>
    <button @click="test">test</button>
    <f-button
      :loading="true"
      type="info"
      text="测试按钮"
      :disabled="true"
    ></f-button>
    <f-input type="text"></f-input>
    <f-input hint="输入框提示hint"></f-input>
    <f-row>
      <f-col>
        <f-radio :data="['qq', 'wechat', 'alipay']" v-model="radio"></f-radio>
      </f-col>
    </f-row>
   
  </div>
</template>

<script>
export default {
  name: "cx",
  data() {
    return {
      radio: "qq",
      treeData: [
        {
          label: "测试1",
          expand: true,
          children: [
            {
              label: "测试子节点1",
              expand: true,
              children: [
                {
                  label: "测试1-3",
                },
                {
                  label: "测试1-3",
                  checked: true,
                },
              ],
            },
            {
              label: "测试子节点2",
            },
          ],
        },
        {
          label: "测试2",
          children: [
            {
              label: "测试2-1",
            },
            {
              label: "测试2-2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    nodeTestClick(e) {
      console.log(e);
    },
    test() {
      this.treeData[0].checked = true;
      this.treeData[1].children.push({
        label: "5-5",
        id: "5-5",
        checked: true,
      });
      this.treeData[1].children[0].children = [
        {
          label: "卧槽",
          id: "6-1",
          checked: true,
        },
      ];

      this.$refs.tree.reBuild();
    },
  },
};
</script>

<style>
</style>