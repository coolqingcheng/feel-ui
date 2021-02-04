<template>
  <div @click.prevent class="f-slider-tag" :style="{ left: `${leftValue}`,'border-color':color }" @mousedown="down($event)" :class="{ 'f-slider-tag-select': data.activeClass }"></div>
</template>

<script lang="ts">
import { computed, getCurrentInstance, PropType, reactive, watch } from "vue";
export default {
  props: {
    //位置百分比
    modelValue: {
      type: Number,
      default: 0,
    },
    parentWidth: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    stepdata: {
      type: Array as PropType<number[]>,
      default: [],
    },
    direction: {
      type: String,
      default: "h",
    },
  },
  setup(props) {
    const data = reactive({
      isPress: false,
      startX: 0,
      left: 0,
      activeClass: false,
    });

    const leftValue = computed(() => {
      let v = `${(data.left / props.parentWidth) * 100}%`;
      console.log("left:" + data.left);
      emit();
      return v;
    });

    const emit = () => {
      let v =
        (data.left / props.parentWidth) * 100 + (10 / props.parentWidth) * 100;
      ctx?.emit("update:modelValue", v);
      ctx?.emit("change", {
        value: v,
        max: props.parentWidth,
      });
    };

    const ctx = getCurrentInstance();
    const down = (e: MouseEvent) => {
      e.stopPropagation();
      ctx?.emit("press", { status: true });
      let target = e.target as HTMLElement;
      data.isPress = true;
      if (!target.style.left) {
        target.style.left = "0px";
      }
      data.activeClass = true;
      data.startX = e.clientX - data.left;

      document.onmousemove = (move) => {
        if (data.isPress) {
          let x = 0;
          let i = move.clientX - data.startX;
          if (props.stepdata.length == 0) {
            if (i >= -10 && i <= props.parentWidth - 10) {
              data.left = i;
            } else {
              if (i <= -10) {
                data.left = -10;
              }
              if (i >= props.parentWidth - 10) {
                data.left = props.parentWidth - 10;
              }
            }
          } else {
            let scale = 0;
            let temp = (i / props.parentWidth) * 100;
            for (let i = 0; i < props.stepdata.length - 1; i++) {
              let item = props.stepdata[i];
              let item1 = props.stepdata[i + 1];
              if (temp >= item && temp < item1) {
                let half = (item1 - item) / 2;
                if (item + half > temp) {
                  scale = item;
                }
                if (item + half < temp) {
                  scale = item1;
                }
              }
            }
            if (i < 0) scale = 0;
            if (i > props.parentWidth) scale = 100;
            data.left = props.parentWidth * (scale / 100) - 10;
          }
        }
        window.getSelection
          ? window.getSelection()?.removeAllRanges()
          : window.document["selection"].empty();
      };
      const cancel = () => {
        data.activeClass = false;
        data.startX = 0;
        data.isPress = false;
        document.onmousemove = null;
        document.onmouseup = null;
        document.onmouseleave = null;
        emit();
        setTimeout(() => ctx?.emit("press", { status: false }), 500);
        console.log("鼠标抬起");
      };
      document.onmouseup = cancel;
      document.onmouseleave = cancel;
    };

    return {
      data,
      down,
      leftValue,
    };
  },
};
</script>

<style>
</style>