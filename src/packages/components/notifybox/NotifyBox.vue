<template>
  <div
    class="f-notify f-notify-right"
    :style="{ transitionProperty: data.animproperty }"
    ref="notifybox"
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

<script lang="ts">
import { onMounted, reactive, ref } from "vue";
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

  setup(props) {
    const data = reactive({
      animproperty: "transform",
    });

    const notifybox = ref<HTMLElement>();
    var timeRef: number;
    onMounted(() => {
      if (props.duration > 0) {
        timeRef = window.setTimeout(() => {
          close();
        }, props.duration);
      }
    });

    const close = () => {
      if (notifybox.value) {
        notifybox.value.style.transform = `translateX(360px)`;
      }
      window.clearTimeout(timeRef);
      setTimeout(() => {
        let node = document.querySelector("#" + props.id);
        if (node) {
          document.body.removeChild(node);
          if (props.closedFunc) {
            props.closedFunc(props.id);
          }
        }
      }, 550);
    };
    const updateAnimProperty = () => {
      data.animproperty = "all";
    };

    return {
      data,
      close,
      notifybox,
      updateAnimProperty,
    };
  },
};
</script>

<style>
</style>