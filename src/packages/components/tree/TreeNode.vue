<template>
  <div class="f-tree-node">
    <div class="f-tree-node-item" :style="{ paddingLeft: pL + 'px' }">
      <div class="icon" @click="toggle()">
        <span
          class="f-icon icon-right"
          :class="[open ? 'bottom' : 'right']"
          v-if="this.data.length > 0"
        ></span>
      </div>
      <div class="text">
        <f-tree-checkbox
          v-if="showCheck"
          v-model="status"
          @select="nodeCheck"
          :indeterminate="indeterminate"
        ></f-tree-checkbox>
        <span
          class="f-tree-icon-text"
          @click="nodeClick()"
          v-html="label"
        ></span>
      </div>
    </div>
    <f-expand-transition ref="body">
      <div class="nodes" v-show="open">
        <f-tree-node
          v-for="(item, i) in data"
          :key="i"
          :id="item.guid"
          :label="item.label"
          :data="item.children"
          :p-l="pL + 20"
          :checked="item.checked"
          :expand="item.expand"
          :indeterminate="item.indeterminate"
          :obj="item"
          :show-check="showCheck"
        ></f-tree-node>
      </div>
    </f-expand-transition>
  </div>
</template>

<script>
export default {
  name: "f-tree-node",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    data: {
      type: Array,
      default: () => [],
    },
    pL: {
      type: Number,
      default: 0,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
    },
    showCheck: {
      type: Boolean,
      default: true,
    },
  },
  inject: ["tree"],
  data() {
    return {
      // status: false,
      type: this.tree.useSolt,
      open: false,
    };
  },
  computed: {
    status() {
      return this.checked;
    },
  },
  mounted() {
    setTimeout(() => {
      this.open = this.expand;
    }, 100);
  },
  methods: {
    nodeClick() {
      this.tree.event.emit("tree-node-click", {
        guid: this.id,
        label: this.label,
        obj: this.obj,
      });
    },
    toggle() {
      this.open = !this.open;
    },
    nodeCheck(e) {
      console.log(e);
      this.tree.event.emit("tree-node-check", {
        guid: this.id,
        status: this.status,
        label: this.label,
        obj: this.obj,
      });
    },
  },
};
</script>

<style>
</style>