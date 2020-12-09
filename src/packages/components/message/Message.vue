<template>
  <div class="f-message" ref="msgRef">
    <p v-html="message"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
export default defineComponent({
  name: "f-message",
  props: {
    message: {
      type: String,
      default: "",
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
  setup(props) {
    const data = reactive({
      closed: props.closedFunc,
    });

    const msgRef = ref<HTMLElement>();

    const close = () => {
      if (data.closed) {
        console.log("关闭组件");
        if (msgRef.value) {
          msgRef.value.style.top = "0";
          msgRef.value.style.opacity = "0.3";
        }
        setTimeout(() => {
          let node = document.querySelector("#" + props.id);
          if (node) {
            document.body.removeChild(node);
            node?.remove();
            if (data.closed) {
              data.closed(props.id);
            }
          }
        }, 550);
      }
    };

    onMounted(() => {
      if (props.duration > 0) {
        setTimeout(() => {
          close();
        }, props.duration);
      }
    });

    return {
      close,
      msgRef,
      data,
    };
  },
});
</script>

<style>
</style>