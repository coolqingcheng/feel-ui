<template>
  <transition
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
export default {
  name: "f-expand-anim",
  setup() {
    let top = 0;
    const beforeEnter = (el: HTMLElement) => {
      el.style.overflow = "hidden";
      let style = getComputedStyle(el);
      el.style.opacity = "0";
      el.style.height = "0px";
    };
    const enter = (el: HTMLElement, done) => {
      let height = el.scrollHeight;
      console.log("展开:" + height);

      gsap.to(el, {
        duration: 0.3,
        opacity: 1,
        height: height + "px",
        onComplete: () => {
          el.style.height = ''
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
        height: 0,
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