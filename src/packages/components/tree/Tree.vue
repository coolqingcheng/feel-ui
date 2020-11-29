<template>
  <div class="f-tree">
    <f-tree-node
      v-for="(item, i) in data"
      :key="i"
      :data="item.children"
      :id="item.guid"
      :label="item.label"
      :checked="item.checked"
      :p-l="pL"
      :expand="item.expand"
      :indeterminate="item.indeterminate"
      :show-check="showCheck"
    ></f-tree-node>
  </div>
</template>

<script>
import mitt from "mitt";
import { genRandCode } from "../../utils/feelutils";
export default {
  name: "f-tree",
  props: {
    tree: {
      type: Array,
      default: () => [],
    },
    showCheck: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      tree: this,
      checkedList: [], //{id,status,label}
      data: [],
    };
  },
  data() {
    return {
      event: mitt(),
      pL: 5,
    };
  },
  created() {
    this.event.on("tree-node-click", this.nodeClick);
    this.event.on("tree-node-check", this.nodeCheck);
    console.log(this.tree);
    this.data = this.tree;
    this.buildTree(this.data, "");
  },
  watch: {
    tree() {
      this.data = this.tree;
    },
  },
  methods: {
    nodeClick(e) {
      console.log("触发了");
      //修改数据源，
      this.$emit("node-click", e);
    },
    nodeCheck(e) {
      //遍历当前节点下的所有节点，并且修改状态
      console.log(e);
      console.log(this.data);
      let node = this.find(this.data, e.guid);
      console.log(node);
      if (node) {
        if (node.checked) {
          node.checked = false;
        } else {
          node.checked = true;
        }
        if (node.children) {
          this.updateDown(node, node.checked);
        }
      }
      this.updateUp(node.pnode);
      // console.log(
      //   this.getCheckeds(this.data, ["label", "guid", "checked"], true, [])
      // );
      this.$emit("node-check", e);
    },
    /**
     *  查找ID
     */
    find(data, id) {
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // console.log(`${item.guid}----${id}`);
        if (item.guid == id) {
          return item;
        }
        if (item.children) {
          let findNode = this.find(item.children, id);
          if (findNode) {
            return findNode;
          }
        }
      }
    },
    /**
     * 向下更新状态
     */
    updateDown(node, checked) {
      node.checked = checked;
      let list = node.children;
      if (list) {
        list.map((item) => {
          item.checked = checked;
          if (item.children) {
            item.children.map((c) => {
              this.updateDown(c, checked);
            });
          }
        });
      }
    },
    /**
     * 向上更新状态
     */
    updateUp(node) {
      if (node) {
        if (node.children) {
          let len = node.children.filter((a) => a.checked).length;
          if (len > 0 && len < node.children.length) {
            node.indeterminate = true;
          }
          if (len == node.children.length) {
            node.indeterminate = false;
          }
          if (node.children.filter((a) => a.indeterminate).length > 0) {
            node.indeterminate = true;
          }
          if (len > 0) {
            node.checked = true;
          } else {
            node.checked = false;
          }
        }
        if (node.pnode) {
          this.updateUp(node.pnode);
        }
      }
    },
    /**
     * 重新构建这棵树，给Node加上父节点的引用
     */
    buildTree(tree, pnode) {
      if (tree) {
        tree.map((node) => {
          if (!node.guid) {
            node.guid = genRandCode();
          }
          if (pnode) {
            node.pnode = pnode;
          }
          if (node.checked) {
            node.checked = true;
          } else {
            node.checked = false;
          }
          node.indeterminate = false;
          if (node.children) {
            this.buildTree(node.children, node);
          } else {
            this.updateUp(node);
          }
        });
      }
    },

    /**
     * 获取所有的选中的节点
     * indeterminate 表示是否也取出状态为indeterminate的节点
     */
    getCheckeds(data, props, indeterminate = true, list) {
      data
        .filter((a) => a.checked)
        .map((node) => {
          var item = {};
          for (let p in props) {
            let filed = props[p];
            item[filed] = node[filed];
          }
          if (indeterminate == true) {
            list.push(item);
          } else {
            if (node.indeterminate == false) {
              list.push(item);
            }
          }
          if (node.children) {
            this.getCheckeds(node.children, props, indeterminate, list);
          }
        });
      return list;
    },
    //公共API
    /**
     * 获取选中的节点
     * indeterminate 表示是否也取出状态为indeterminate的节点
     */
    getCheckNodes(props, indeterminate = true) {
      return this.getCheckeds(this.data, props, indeterminate, []);
    },
    reBuild() {
      this.buildTree(this.data, "");
    },
  },
  destory() {
    this.event.all.clear();
  },
};
</script>

<style>
</style>