<template>
  <div class="f-slider-tip" :style="{ left: `${data.progreeScale}%` }" v-if="showtip">{{tips}}</div>
  <div @click.prevent class="f-slider-box" :style="{ left: `${data.progreeScale}%` }" @mousedown="down($event)" :class="{ 'f-slider-tag-select': data.activeClass }">
    <div class="f-slider-circle" :style="{'border-color':`${disabled?'#ccc':color}`}">
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, PropType, reactive, watch } from "vue";
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
    tips: {
      type: String,
    },
    showtip: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["press", "change", "update:modelValue"],
  setup(props) {
    const data = reactive({
      isPress: false,
      activeClass: false,
      progreeScale: props.modelValue,
    });

    watch(
      () => props.modelValue,
      () => {
        data.progreeScale = props.modelValue;
      }
    );

    const emit = () => {
      let v = data.progreeScale;
      ctx?.emit("update:modelValue", v);
      ctx?.emit("change", {
        value: v,
        max: props.parentWidth,
      });
    };

    const ctx = getCurrentInstance();
    const down = (e: MouseEvent) => {
      e.stopPropagation();
      if (props.disabled) return;
      ctx?.emit("press", { status: true });
      let target = e.target as HTMLElement;
      data.isPress = true;
      if (!target.style.left) {
        target.style.left = "0%";
      }
      data.activeClass = true;
      let left = (data.progreeScale / 100) * props.parentWidth;
      let startX = e.clientX - left;
      console.log(`left:${left} startX:${startX}`);

      //用百分比计算left

      document.onmousemove = (move) => {
        if (data.isPress) {
          let i = move.clientX - startX;
          if (props.stepdata.length == 0) {
            if (i >= 0 && i <= props.parentWidth) {
              left = i;
            } else {
              if (i <= 0) {
                left = 0;
              }
              if (i >= props.parentWidth) {
                left = props.parentWidth;
              }
            }
            data.progreeScale = (left / props.parentWidth) * 100;
          } else {
            // console.log(props.stepdata);
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
            data.progreeScale = scale;
          }
        }
        emit();
        window.getSelection
          ? window.getSelection()?.removeAllRanges()
          : window.document["selection"].empty();
      };
      const cancel = () => {
        data.activeClass = false;
        startX = 0;
        data.isPress = false;
        document.onmousemove = null;
        document.onmouseup = null;
        document.onmouseleave = null;
        emit();
        setTimeout(() => ctx?.emit("press", { status: false }), 500);
      };
      document.onmouseup = cancel;
      document.onmouseleave = cancel;
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