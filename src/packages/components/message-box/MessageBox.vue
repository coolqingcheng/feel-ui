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
          <button @click="close(true)">确定</button>
          <button @click="close(false)" v-if="showCancel">取消</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from "vue";
import ModalMask from "../modalbox/ModalMask.vue";
export default {
  name: "f-messagebox",
  components: {
    ModalMask,
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