<template>
  <transition
    @before-enter="beForeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    @before-leave="beForeLeave"
    @leave="Leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "f-anim-basic",
  data: function () {
    return {
      tranName: ".5s height linner",
    };
  },
  methods: {
    beForeEnter(el) {
      el.style.height = "0px";
    },
    Enter(el) {
      el.offsetHeight;
      el.style.height = `${el.scrollHeight}px`;
      el.style.transition = this.tranName;
      // el.style.overflow = "hidden";

      // done();
    },
    afterEnter(el) {
      // console.log("after-enter");
      el.style.height = "";
      el.style.transition = "";
    },
    beForeLeave(el) {
      // console.log("before-leave:" + el.scrollHeight);
      el.style.height = el.scrollHeight + "px";
      el.style.transition = this.tranName;
    },
    Leave(el) {
      // console.log("leave");
      el.offsetHeight;
      el.style.height = "0px";
    },
    afterLeave(el) {
      // console.log("after-leave");
      el.style.height = "";
      el.style.transition = "";
    },
  },
};
</script>

<style>
</style>