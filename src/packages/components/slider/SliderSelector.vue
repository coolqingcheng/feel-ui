<template>
  <div
    class="f-slider-tag"
    :style="{ left: left }"
    @mousedown="down($event)"
    :class="{ 'f-slider-tag-select': activeClass }"
  ></div>
</template>

<script>
export default {
  name: "f-slider-selector",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    value() {
      this.left = this.value + "px";
      console.log("修改");
    },
  },
  data() {
    return {
      isTouch: false,
      startX: 0,
      left: this.value + "px",
      moveLeft: 0,
      activeClass: false,
    };
  },
  methods: {
    down(e) {
      this.isTouch = true;
      console.log(e);
      this.activeClass = true;

      this.left = parseInt(e.target.style.left);
      this.startX = e.clientX - this.left;
      document.onmousemove = (move) => {
        if (this.isTouch) {
          let i = move.clientX - this.startX;
          let width = this.$parent.$el.clientWidth;
          //   console.log(this.isTouch);
          if (i > 0 && i < width - 20) {
            this.left = i + "px";
          }
          this.moveLeft = e.target.style.left;
          this.$emit("change", { value: parseFloat(this.moveLeft) });
          window.getSelection
            ? window.getSelection().removeAllRanges()
            : document.selection.empty();
        }
      };
      document.onmouseup = (e) => {
        console.log("end:" + e);
        this.activeClass = false;
        this.startX = 0;
        this.isTouch = false;
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>

<style>
</style>