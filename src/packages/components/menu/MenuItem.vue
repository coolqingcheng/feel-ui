<template>
  <div class="f-menu-item" @click="itemClick()" :class="[status?'f-menu-item-active':'']">
    <div class="f-menu-item-left" :style="{paddingLeft:left+'px'}">
      <span>icon:{{status}}</span>
      <span class="f-menu-item-left-label">{{label}}</span>
    </div>
    <div class="f-menu-item-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-menu-item",
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
  inject: ["menu"],
  data() {
    return {
      left: 0,
      status: false,
    };
  },
  created() {
    let parent = this.$parent.$parent;
    console.log(parent);
    // if (parent.$options._componentTag == "f-menu-group") {
    //   console.log("item");
    //   this.left = parent.left + 25;
    // }
    this.menu.pushItem(this, this.uuid);
  },
  mounted() {
    // console.log("检查是否激活");
    this.status = this.menu.checkActive(this.uuid);
  },
  methods: {
    itemClick() {
      // console.log("修改状态前:" + this.status);
      console.log(this.$parent);
      if (this.menu.checkActive(this.uuid)) {
        return;
      }
      this.menu.activeItem(this.uuid);
      // console.log("修改状态后:" + this.status);
    },
    active() {
      // console.log("点击:" + status + " - uuid:" + this.uuid);
      this.status = true;
      // console.log("修改后的状态:" + this.status);
    },
    unActive() {
      this.status = false;
    },
  },
};
</script>

<style>
</style>