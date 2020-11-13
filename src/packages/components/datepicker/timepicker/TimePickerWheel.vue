<template>
  <li>
    <span class="f-time-picker-updown" @click="upClick">
      <span class="f-icon icon-up"></span>
    </span>
    <div class="f-time-picker-timelist">
      <ul ref="timeList">
        <li v-for="(item, i) in data.list" :key="i">
          <span
            class="f-time-txt"
            :class="[
              selectIndex == i ? 'f-time-picker-select' : '',
              selectIndex - 1 == i ? 'f-time-picker-pre' : '',
              selectIndex + 1 == i ? 'f-time-picker-next' : '',
            ]"
            >{{ item }}</span
          >
        </li>
      </ul>
    </div>
    <span class="f-time-picker-updown" @click="downClick">
      <span class="f-icon icon-down"></span
    ></span>
  </li>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  onUpdated,
  PropType,
  reactive,
  ref,
  watch,
} from "vue";
import d from "../date";
import gsap from "gsap";
interface Data {
  value: number;
  maskClick: boolean;
  list: Array<string>;
  scrollTop: number;
}

export default {
  props: {
    list: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    modelValue: Number,
  },
  setup(props, context) {
    const timeList = ref<HTMLElement>();
    const data = reactive<Data>({
      value: 0,
      maskClick: false,
      list: [],
      scrollTop: 0,
    });
    const zeroFill = (v: number) => {
      return d.checkTime(v);
    };
    const hClick = () => {};

    const upClick = () => {
      if (timeList.value) {
        if (data.maskClick) return;
        data.maskClick = true;
        let v = timeList.value.scrollTop;
        v -= 25;
        if (v < 0) {
          v = (data.list.length - 2) * 25;
        }
        gsap.to(timeList.value, {
          scrollTop: v,
          duration: 0.1,
          onComplete: () => {
            data.maskClick = false;
            if (timeList.value) {
              data.scrollTop = timeList.value?.scrollTop;
              context.emit(
                "update:modelValue",
                props.list[selectIndex.value - 1]
              );
            }
          },
        });
      }
    };
    const downClick = () => {
      if (timeList.value) {
        if (data.maskClick) return;
        data.maskClick = true;
        let v = timeList.value.scrollTop;
        v += 25;
        if (v >= (data.list.length - 2) * 25) {
          v = 0;
        }

        gsap.to(timeList.value, {
          scrollTop: v,
          duration: 0.1,
          onComplete: () => {
            data.maskClick = false;
            if (timeList.value) {
              data.scrollTop = timeList.value?.scrollTop;
              context.emit(
                "update:modelValue",
                props.list[selectIndex.value - 1]
              );
            }
          },
        });
      }
    };

    const selectIndex = computed(() => {
      let i = data.scrollTop / 25;
      return i + 1;
    });

    watch(
      () => props.list,
      () => {
        if (props.list) {
          data.list.push("");
          props.list.forEach((a) => {
            data.list.push(zeroFill(a));
          });
          data.list.push("");
        }
      }
    );
    onUpdated(() => {});

    const initScrollTop = () => {
      //滚动到指定的位置

      if (props.modelValue) {
        if (timeList.value) {
          let top = props.modelValue * 25;
          gsap.to(timeList.value, {
            scrollTop: top,
            duration: 0.2,
            onComplete: () => {
              if (timeList.value) {
                data.scrollTop = timeList.value?.scrollTop;
              }
            },
          });
        }
      }
    };

    onMounted(() => {
      setTimeout(() => {
        initScrollTop();
      }, 200);
    });
    return {
      zeroFill,
      data,
      upClick,
      downClick,
      timeList,
      selectIndex,
    };
  },
};
</script>

<style>
</style>