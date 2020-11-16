<template>
  <transition
    name="fade-bg"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import gsap from "gsap";
export default {
  name: "f-fade-anim",
  props: {
    duration: {
      type: Number,
      default: 0.5,
    },
  },
  setup(props) {
    const beforeEnter = (el) => {
      gsap.set(el, {
        opacity: 0,
      });
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        onComplete: done,
        duration: props.duration,
      });
    };
    const leave = (el, done) => {
      gsap.to(el, {
        opacity: 0,
        duration: props.duration,
        onComplete: done,
      });
    };
    return {
      beforeEnter,
      enter,
      leave,
    };
  },
};
</script>
