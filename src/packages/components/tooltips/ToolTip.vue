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
  },
  setup() {
    const trigger = (event: MouseEvent) => {
      console.log("触发事件");
      console.log(event);
    };
    const triggerEvent = reactive({ mouseover: trigger, click: trigger });

    return {
      trigger,
      triggerEvent,
    };
  },
};
</script>

<style>
</style>