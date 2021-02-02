<template>
  <div @click.prevent class="f-slider-tag" :style="{ left: leftValue,'border-color':color }" @mousedown="down($event)" :class="{ 'f-slider-tag-select': data.activeClass }"></div>
</template>

<script lang="ts">
import { computed, getCurrentInstance, PropType, reactive, watch } from "vue";
export default {
  props: {
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
  },
  setup(props) {
    const data = reactive({
      isPress: false,
      startX: 0,
      left: props.modelValue + "px",
      activeClass: false,
      width: props.parentWidth,
    });

    watch(
      () => props.parentWidth,
      () => {
        data.width = props.parentWidth;
      }
    );

    watch(
      () => props.modelValue,
      () => {
        data.left = `${props.modelValue}px`;
        console.log("值修改");
        emit();
      }
    );
    console.log("stepdata:" + props.stepdata);

    const leftValue = computed(() => {
      // console.log(
      //   `${parseFloat(data.left)} ${props.parentWidth}  ${
      //     (parseFloat(data.left) / props.parentWidth) * 100
      //   }%`
      // );

      return `${((parseFloat(data.left) - 10) / props.parentWidth) * 100}%`;
    });

    const emit = () => {
      console.log(parseFloat(data.left));

      ctx?.emit("update:modelValue", parseFloat(data.left));
      ctx?.emit("change", {
        value: parseFloat(data.left),
        max: data.width,
      });
    };

    const ctx = getCurrentInstance();
    const down = (e: MouseEvent) => {
      e.stopPropagation();
      let target = e.target as HTMLElement;
      data.isPress = true;
      // console.log(target.style);
      if (!target.style.left) {
        target.style.left = "0px";
      }
      data.activeClass = true;
      // data.left = target.style.left;
      data.startX = e.clientX - parseFloat(data.left);

      document.onmousemove = (move) => {
        if (data.isPress) {
          let i = move.clientX - data.startX;
          if (props.stepdata.length == 0) {
            if (i >= -10 && i < data.width) {
              data.left = i + "px";
            } else {
              if (i <= -10) {
                data.left = "-10px";
              }
              if (i >= data.width) {
                data.left = data.width + "px";
              }
            }
          } else {
            // console.log(`${(i / props.parentWidth) * 100}%`);
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
            data.left = `${props.parentWidth * (scale / 100) - 10}px`;
          }
          emit();
          window.getSelection
            ? window.getSelection()?.removeAllRanges()
            : window.document["selection"].empty();
        }
      };
      document.onmouseup = () => {
        data.activeClass = false;
        data.startX = 0;
        data.isPress = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    const click = () => {};
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