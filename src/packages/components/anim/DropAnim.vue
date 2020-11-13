<template>
  <transition
    name="drop"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import gsap from "gsap";
import { reactive } from "vue";
export default {
  name: "f-drop-anim",
  setup() {
    let top = 0;
    const beforeEnter = (el: HTMLElement) => {
      el.style.overflow = "hidden";
      let style = getComputedStyle(el);
      top = parseInt(style.top);
      gsap.set(el, {
        opacity: 0,
        top: top * 2 + "px",
      });
    };
    const enter = (el: HTMLElement, done) => {
      let height = el.scrollHeight;
      gsap.to(el, {
        duration: 0.3,
        opacity: 1,
        top: top + "px",
        // height: height + "px",
        onComplete: () => {
          done();
        },
      });
    };
    const beforeLeave = (el: HTMLElement) => {
      el.style.overflow = "hidden";
    };
    const leave = (el, done) => {
      gsap.to(el, {
        duration: 0.2,
        opacity: 0,
        onComplete: done,
      });
    };
    return {
      beforeEnter,
      enter,
      leave,
      beforeLeave,
    };
  },
};
</script>

<style>
</style>