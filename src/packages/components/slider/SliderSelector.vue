<template>
  <div class="f-slider-tag" :style="{ left: leftValue,'border-color':color }" @mousedown="down($event)" @click.stop="click" :class="{ 'f-slider-tag-select': data.activeClass }"></div>
</template>

<script lang="ts">
import { computed, getCurrentInstance, onMounted, reactive, watch } from "vue";
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
    color:{
      type:String,
    }
  },
  setup(props) {
    const data = reactive({
      isPress: false,
      startX: 0,
      left: "0px",
      activeClass: false,
      width: props.parentWidth,
    });

    watch(
      () => props.parentWidth,
      () => {
        data.width = props.parentWidth;
        // data.width -= 10;
      }
    );

    watch(
      () => data.left,
      () => {}
    );

    watch(
      () => props.modelValue,
      () => {
        data.left = props.modelValue + "px";
        emit();
      }
    );

    const leftValue = computed(() => {
      // console.log(
      //   `${parseFloat(data.left)} ${props.parentWidth}  ${
      //     (parseFloat(data.left) / props.parentWidth) * 100
      //   }%`
      // );

      return `${(parseFloat(data.left) / props.parentWidth) * 100}%`;
    });

    const emit = () => {
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
          if (i >= 0 && i < data.width) {
            data.left = i + "px";
          } else {
            if (i <= 0) {
              data.left = "0px";
            }
            if (i >= data.width) {
              data.left = data.width + "px";
            }
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
      click,
    };
  },
};
</script>

<style>
</style>