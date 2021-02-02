<template>
  <div class="f-tooltips">
    <div class="f-tooltips-label">消息</div>
    <div class="f-tooltips-arrow">箭头</div>
  </div>
  <slot name="trigger" :on="triggerEvent"></slot>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  name: "f-tooltip",
  props: {
    msg: {
      type: String,
    },
    event: {
      type: String,
      default: "hover",
      validator: (v: string) => {
        return ["hover", "click"].indexOf(v) > -1;
      },
    },
  },
  setup() {
    const trigger = (event: MouseEvent) => {
      console.log("触发事件");
      console.log(event);
    };
    const triggerEvent = reactive({
      mouseenter: trigger,
      click: trigger,
      mouseleave: trigger,
    });

    return {
      trigger,
      triggerEvent,
    };
  },
};
</script>

<style>
</style>