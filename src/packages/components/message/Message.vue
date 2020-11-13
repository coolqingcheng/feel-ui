<template>
  <div class="f-message">
    <p v-html="message"></p>
  </div>
</template>

<script>
export default {
  name: "f-message",
  props: {
    message: {
      type: String,
      default: "react 多级折叠菜单",
    },
    id: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 0,
    },
    closedFunc: {
      type: Function,
    },
  },
  data() {
    return {
      closed: null,
    };
  },
  methods: {
    // setCloseCallBack(func) {
    //   this.closed = func;
    // },
    updateAnimProperty() {
      // this.animproperty = "all";
    },
    close() {
      if (this.closed) {
        console.log("关闭组件");
        this.$el.style.top = 0;
        this.$el.style.opacity = 0.3;
        setTimeout(() => {
          let node = document.querySelector("#" + this.id);
          document.body.removeChild(node);
          node?.remove();
          if (this.closed) {
            this.closed(this.id);
          }
        }, 550);
      }
    },
  },
  mounted() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },
};
</script>

<style>
</style>