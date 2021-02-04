<template>
  <div class="f-tooltips" :class="[data.tooltipscode,tooltipDirection]" ref="tooltips" v-show="data.show">
    <div class="f-tooltips-label" ref="label">{{msg}}</div>
    <div class="f-tooltips-arrow"></div>
  </div>
  <slot name="trigger" :on="triggerEvent"></slot>
</template>

<script lang="ts">
import {
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
} from "vue";
import { genRandCode } from "@/packages/utils/feelutils";
import cdk from "@/packages/utils/cdk";
export default {
  name: "f-tooltip",
  props: {
    msg: {
      type: String,
      default: "null",
      required: true,
    },
    trigger: {
      type: String,
      default: "hover",
      validator: (v: string) => {
        return ["hover", "click"].indexOf(v) > -1;
      },
    },
    direction: {
      type: String,
      default: "top",
      validator: (v: string) => {
        return ["left", "right", "top", "bottom"].indexOf(v) > -1;
      },
    },
  },
  setup(props) {
    const trigger = (event: MouseEvent) => {
      updatePos();
      if (props.trigger == "hover") {
        if (event.type == "mouseenter") {
          data.show = true;
        }
      }
      if (event.type == "mouseleave") {
        data.show = false;
      }
      if (props.trigger == "click") {
        if (event.type == "click") {
          data.show = true;
        }
      }
    };
    cdk.docOnScroll(() => {
      updatePos();
    });
    cdk.windowOnResize(() => {
      updatePos();
    });
    const tooltipDirection = computed(() => {
      return `f-tooltips-${props.direction}`;
    });

    const updatePos = () => {
      let slotEl = document.querySelector(`.${data.code}`) as HTMLElement;
      let rect = slotEl.getBoundingClientRect();
      let el = document.querySelector(`.${data.tooltipscode}`) as HTMLElement;
      if (el) {
        el.style.position = "fixed";
        if (["top", "bottom"].indexOf(props.direction) > -1) {
          el.style.top = `${rect.y - rect.height - 1}px`;
          el.style.left = `${rect.x - (el.clientWidth - rect.width) / 2}px`;
          //垂直对齐
          console.log(props.direction);

          if (props.direction == "bottom") {
            if (label.value) {
              console.log(`${rect.y} ${rect.height}`);
              el.style.top = `${rect.y + rect.height + 3}px`;
            }
          }
        }
        if (["left", "right"].indexOf(props.direction) > -1) {
          if (props.direction == "left") {
            el.style.top = `${rect.y + (rect.height - el.clientHeight) / 2}px`;
            el.style.left = `${rect.x - el.clientWidth - 3}px`;
          }
          if (props.direction == "right") {
            el.style.top = `${rect.y + (rect.height - el.clientHeight) / 2}px`;
            el.style.left = `${rect.x + rect.width + 3}px`;
          }
        }
      }
    };
    const randCode = genRandCode();
    const data = reactive({
      code: "f-tooltip-trigger" + randCode,
      tooltipscode: "f-tooltips-" + randCode,
      show: false,
    });
    const triggerEvent = reactive({
      mouseenter: trigger,
      click: trigger,
      mouseleave: trigger,
    });

    const addClassRandCode = () => {
      let el = ((ctx as any).ctx.$el.nextElementSibling as HTMLElement)
        .nextElementSibling as HTMLElement;
      el.classList.add(data.code);
      return el;
    };

    const ctx = getCurrentInstance();

    onMounted(() => {
      addClassRandCode();
      let tooltips = document.querySelector(`.${data.tooltipscode}`);
      if (tooltips) {
        if (tooltips.parentNode?.nodeName != "BODY") {
          document.body.append(tooltips);
        }
      }
      updatePos();
    });

    onUpdated(() => {
      updatePos();
    });

    onUnmounted(() => {
      let node = document.querySelector(`.${data.tooltipscode}`);
      if (node) {
        document.body.removeChild(node);
      }
    });

    const label = ref<HTMLElement>();

    return {
      trigger,
      triggerEvent,
      data,
      label,
      tooltipDirection,
    };
  },
};
</script>

<style>
</style>