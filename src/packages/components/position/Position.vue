<template>
  <slot name="trigger" :on="{ click: triggerEvent }"></slot>
  <f-drop-anim>
    <div ref="body" class="f-position-wrapper f-shadow" v-show="data.show">
      <slot></slot>
    </div>
  </f-drop-anim>
  <p ref="testRef"></p>
</template>

<script lang="ts">
import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  vShow,
  watch,
  withCtx,
} from "vue";
import { genRandCode } from "../../utils/feelutils";

import cdk from "../../utils/cdk";
export default {
  name: "f-position",
  props: {
    /**
     * 方向。top bottom
     */
    direction: {
      type: String,
      default: "bottom",
      validator: (v: string) => ["top", "bottom"].indexOf(v) > -1,
    },
    /**
     * 根据屏幕自动判断左右对齐，false默认左对齐
     */
    autoPos: {
      type: Boolean,
      default: true,
    },
    trigger: {
      type: String,
      default: "click",
      validator: (v: string) => ["click", "hover"].indexOf(v) > -1,
    },
  },

  setup(props, context) {
    const data = reactive({
      id: "f-wrapper-",
      show: false,
    });

    const ctx = getCurrentInstance();
    const triggerEvent = (e: MouseEvent) => {
      let html = e.currentTarget;
      data.show = !data.show;
      updatePos();
    };

    cdk.windowOnResize(() => {
      updatePos();
    });

    cdk.docOnScroll(() => {
      updatePos();
    });

    onMounted(() => {
      data.id += genRandCode();
      init();
    });

    onUnmounted(() => {
      document.querySelector(`#${data.id}`)?.remove();
    });

    watch(
      () => data.show,
      () => {
        setTimeout(() => {
          updatePos();
        }, 10);
      }
    );

    const getTriggerEl = () => {
      let instance = ctx as any;
      return <HTMLElement>instance.ctx.$el.nextElementSibling;
    };

    const init = () => {
      let el = getTriggerEl();
      if (el) {
        let wrapper = <HTMLElement>ctx?.refs.body;
        wrapper.style.position = "absolute";
        wrapper.style.left = el.offsetLeft + "px";
        wrapper.style.top = el.offsetTop + el.offsetHeight + "px";
        let doc = document.querySelector(`#${data.id}`);
        if (!doc) {
          wrapper.setAttribute("id", data.id);
          document.body.append(wrapper);
        }
        updatePos();
      }
    };

    const updatePos = () => {
      let el = getTriggerEl();
      if (el) {
        let wrapper = <HTMLElement>ctx?.refs.body;
        wrapper.style.position = "absolute";
        wrapper.style.left = el.offsetLeft + "px";
        wrapper.style.top = el.offsetTop + el.offsetHeight + "px";
        if (props.direction == "top") {
          wrapper.style.top = el.offsetTop - wrapper.scrollHeight + "px";
        }
        //判断left的显示边界
        if (parseInt(wrapper.style.left) <= 0) {
          wrapper.style.left = 0 + "px";
        }

        if (
          parseInt(wrapper.style.left) + wrapper.scrollWidth >=
          document.body.scrollWidth
        ) {
          wrapper.style.left =
            document.body.scrollWidth - wrapper.scrollWidth + "px";
        }
      }
    };

    return {
      triggerEvent,
      data,
    };
  },
};
</script>

<style>
</style>