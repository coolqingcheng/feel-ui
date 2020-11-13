<template>
  <div class="f-collapse" ref="qc">
    <slot></slot>
  </div>
</template>

<script>
import mitt from "mitt";
export default {
  name: "f-collapse",
  data() {
    return {
      panels: [],
      event: mitt(),
    };
  },
  provide() {
    return {
      collapse: this,
    };
  },
  props: {
    //手风琴折叠模式 0 只展开一个其他的关闭，1可以展开很多
    type: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  watch: {
    type: function () {
      console.log("初始化");
    },
  },
  created() {
    this.event.on("expand", (e) => {
      console.log("expand:" + JSON.stringify(e));
      if (this.type == 0) {
        //手风琴模式
        let index = this.panels.indexOf(e.id);
        if (index > -1) {
          this.panels = [];
        } else {
          this.panels = [e.id];
        }
      } else {
        //多个展开模式
        let index = this.panels.indexOf(e.id);
        if (index > -1) {
          //del
          this.panels.splice(index, 1);
        } else {
          //insert
          this.panels.push(e.id);
        }
      }
    });
  },
};
</script>

<style>
</style>