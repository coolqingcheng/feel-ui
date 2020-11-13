<template>
  <div
    class="f-notify f-notify-right"
    :style="{ transitionProperty: animproperty }"
  >
    <li class="f-notify-item">
      <div class="f-notify-item-icon" v-if="icon">
        <!-- <f-icon></f-icon> -->
      </div>
      <div class="f-notify-item-content">
        <h3 class="f-notify-title">{{ title }} - {{ duration }}</h3>
        <p v-html="content"></p>
      </div>
      <div class="f-notify-close">
        <button @click="close()">X</button>
      </div>
    </li>
  </div>
</template>

<script>
// import { genRandCode } from "../../utils/feelutils";
export default {
  name: "f-notifybox",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 4500,
    },
    closedFunc: {
      type: Function,
    },
  },
  data() {
    return {
      closed: null,
      animproperty: "transform",
    };
  },
  mounted() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },
  methods: {
    close() {
      console.log(this.title);
      this.$el.style.transform = `translateX(360px)`;
      setTimeout(() => {
        let node = document.querySelector("#" + this.id);
        if (node) {
          document.body.removeChild(node);
          if (this.closed) {
            this.closed(this.id);
          }
        }
      }, 550);
    },
    setCloseCallBack(func) {
      this.closed = func;
    },
    updateAnimProperty() {
      this.animproperty = "all";
    },
  },
};
</script>

<style>
</style>