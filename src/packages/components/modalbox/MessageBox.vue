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

<script>
import { onMounted, reactive } from "vue";
import ModalMask from "./ModalMask.vue";
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
    const close = () => {
      data.show = false;
      if (props.closeFunc) {
        setTimeout(() => {
          props.closeFunc();
        }, 300);
      }
    };
    onMounted(() => {
      data.show = true;
    });
    return {
      close,
      data,
    };
  },
  // methods: {
  //   close(status) {
  //     this.show = false;
  //     setTimeout(() => {
  //       this.closeFunc(status);
  //     }, 300);
  //   },
  //   setCloseCallBack(func) {
  //     this.closeFunc = func;
  //   },
  //   setShow() {
  //     this.show = true;
  //   },
  // },
};
</script>

<style>
</style>