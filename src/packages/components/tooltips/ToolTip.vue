<template>
  <div class="f-tooltips f-tooltips-bottom" :class="data.tooltipscode" ref="tooltips" v-show="data.show">
    <div class="f-tooltips-label" ref="label">200GB</div>
    <div class="f-tooltips-arrow"></div>
  </div>
  <slot name="trigger" :on="triggerEvent"></slot>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, reactive, ref } from "vue";
import { genRandCode } from "@/packages/utils/feelutils";
import cdk from "@/packages/utils/cdk";
export default {
  name: "f-tooltip",
  props: {
    msg: {
      type: String,
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
      default: "bottom",
      validator: (v: string) => {
        return ["left", "right", "top", "bottom"].indexOf(v) > -1;
      },
    },
  },
  setup(props) {
    const trigger = (event: MouseEvent) => {
      updatePos();
      if (event.type == "mouseenter") {
        data.show = true;
      }
      if (event.type == "mouseleave") {
        // data.show = false;
      }
      if (event.type == "click") {
        data.show = true;
      }
    };
    cdk.docOnScroll(() => {
      updatePos();
    });
    cdk.windowOnResize(() => {
      updatePos();
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
          if (props.direction == "bottom") {
            if (label.value) {
              console.log(`${rect.y} ${slotEl.getBoundingClientRect().height}`);

              el.style.top = `${
                rect.y + slotEl.getBoundingClientRect().height + 3
              }px`;
            }
          }
        }
        if (["left", "right"].indexOf(props.direction) > -1) {
        }
      }
    };
    const randCode = genRandCode();
    const data = reactive({
      code: "f-tooltip-trigger" + randCode,
      tooltipscode: "f-tooltips-" + randCode,
      show: true,
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
    };
  },
};
</script>

<style>
</style>