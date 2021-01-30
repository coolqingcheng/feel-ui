<template>
  <div class="f-slider-tag" :style="{ left: data.left }" @mousedown="down($event)" :class="{ 'f-slider-tag-select': data.activeClass }"></div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, watch } from "vue";
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const data = reactive({
      isTouch: false,
      startX: 0,
      left: "0px",
      activeClass: false,
    });

    watch(
      () => props.value,
      () => {
        data.left = props.value + "px";
      }
    );
    const ctx = getCurrentInstance();
    const down = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      data.isTouch = true;
      console.log(target.style);
      if (!target.style.left) {
        target.style.left = "0px";
      }
      data.activeClass = true;

      data.left = target.style.left;
      data.startX = e.clientX - parseFloat(data.left);
      let instance = ctx as any;
      let width: number = instance.parent.ctx.$el.clientWidth;
      width -= 20;
      console.log(width);
      document.onmousemove = (move) => {
        if (data.isTouch) {
          let i = move.clientX - data.startX;

          
          if (i >= 0 && i < width) {
            data.left = i + "px";
          } else {
            if (i <= 0) {
              data.left = "0px";
            }
            if (i >= width) {
              data.left = width + "px";
            }
          }

          ctx?.emit("change", { value: parseFloat(data.left), max: width });
          window.getSelection
            ? window.getSelection()?.removeAllRanges()
            : window.document["selection"].empty();
        }
      };
      document.onmouseup = (e) => {
        data.activeClass = false;
        data.startX = 0;
        data.isTouch = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
    return {
      data,
      down,
    };
  },
};
</script>

<style>
</style>