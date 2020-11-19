<template>
  <div class="f-collapse">
    <slot></slot>
  </div>
</template>

<script>
import mitt from "mitt";
import { onMounted, provide, reactive } from "vue";
export default {
  name: "f-collapse",
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
    openid: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const event = mitt();
    const data = reactive({
      panels: [],
      height: props.height,
    });

    provide("collapse", {
      data: data,
      event: event,
    });

    onMounted(() => {
      props.openid.map((item) => {
        data.panels.push(item);
      });
      event.on("expand", (e) => {
        if (props.type == 0) {
          //手风琴模式
          let index = data.panels.indexOf(e.id);
          if (index > -1) {
            data.panels = [];
            context.emit("expand", { id: e.id, expand: false });
          } else {
            data.panels = [e.id];
            context.emit("expand", { id: e.id, expand: true });
          }
        } else {
          //多个展开模式
          let index = data.panels.indexOf(e.id);
          if (index > -1) {
            //del
            data.panels.splice(index, 1);
            context.emit("expand", { id: e.id, expand: false });
          } else {
            //insert
            data.panels.push(e.id);
            context.emit("expand", { id: e.id, expand: true });
          }
        }
      });
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>