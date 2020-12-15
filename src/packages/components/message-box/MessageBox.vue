<template>
  <div class="f-messagebox">
    <transition name="mask">
      <ModalMask v-if="data.show"></ModalMask>
    </transition>
    <transition name="dialog">
      <div class="f-messagebox-container" v-if="data.show">
        <div class="f-messagebox-header">
          <h1>{{ title }}</h1>
        </div>
        <div class="f-messagebox-content" v-html="content"></div>
        <div class="f-messagebox-footer">
          <f-button @click="close(true)" text="确定" :mini="true"></f-button>
          <f-button @click="close(false)" v-if="showCancel" text="取消" type="default" :mini="true"></f-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from "vue";
import ModalMask from "../modalbox/ModalMask.vue";
import Button from "../button/Button.vue"
export default {
  name: "f-messagebox",
  components: {
    ModalMask,
    "f-button":Button
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    closeFunc: {
      type: Function,
    },
  },
  setup(props) {
    const data = reactive({
      show: false,
    });
    const close = (status: Boolean) => {
      data.show = false;

      setTimeout(() => {
        if (props.closeFunc) {
          props.closeFunc(status);
        }
      }, 100);
    };
    onMounted(() => {
      data.show = true;
    });
    return {
      close,
      data,
    };
  },
};
</script>

<style>
</style>