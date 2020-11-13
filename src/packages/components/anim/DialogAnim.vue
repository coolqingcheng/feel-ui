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
  name: "f-dialog-anim",
  props: {
    top: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    let top = 0;
    const beforeEnter = (el: HTMLElement) => {
      let style = getComputedStyle(el);
      top = parseInt(style.top);
      el.style.opacity = "0";
      el.style.top = "0";
    };
    const enter = (el: HTMLElement, done) => {
      gsap.to(el, {
        duration: 0.3,
        opacity: 1,
        top: props.top + "px",

        onComplete: done,
      });
    };
    const beforeLeave = (el: HTMLElement) => {};
    const leave = (el, done) => {
      gsap.to(el, {
        duration: 0.3,
        opacity: 0,
        top: "0px",
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