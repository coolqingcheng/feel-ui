<template>
  <div class="f-menu-group">
    <div class="f-menu-group-header" @click="toggle()" :style="{paddingLeft:left+'px'}">
      <span class="f-menu-group-header-label">{{label}} {{ status}}</span>
      <span class="f-menu-group-header-icon iconfont icon-right" :class="[status?'bottom':'right']"></span>
    </div>
    <f-expand-transition>
      <div class="f-menu-group-body" v-show="status">
        <slot></slot>
      </div>
    </f-expand-transition>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  name: "f-menu-group",
  data: function () {
    return {
      status: this.open,
      left: 25,
      height: 0,
    };
  },
  methods: {
    toggle() {
      this.status = !this.status;
    },
    test() {
      console.log(this.$parent);
      console.log(this.$parent.left);
    },
    update() {
      if (this.status) {
        this.$refs.body.style.height = this.height + "px";
      } else {
        this.$refs.body.style.height = "0px";
      }
    },
  },
};
</script>

<style>
</style>