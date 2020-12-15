<template>
  <div class="f-messagebox">
    <transition name="mask">
      <ModalMask v-if="data.show"></ModalMask>
    </transition>
    <f-dialog-anim :top="data.top">
      <div class="f-messagebox-container f-shadow" v-if="data.show">
        <div class="f-messagebox-header">
          <h1>{{ title }}</h1>
        </div>
        <div class="f-messagebox-content" v-html="content"></div>
        <div class="f-messagebox-footer">
          <f-button @click="close(true)" text="确定" :mini="true"></f-button>
          <f-button
            @click="close(false)"
            v-if="showCancel"
            text="取消"
            type="default"
            :mini="true"
          ></f-button>
        </div>
      </div>
    </f-dialog-anim>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref } from "vue";
import ModalMask from "../modalbox/ModalMask.vue";
import Button from "../button/Button.vue";
import DialogAnim from "../anim/DialogAnim.vue";
import cdk from "../../utils/cdk";

export default {
  name: "f-messagebox",
  components: {
    ModalMask,
    "f-button": Button,
    "f-dialog-anim": DialogAnim,
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
      top: 0,
      left: 0,
    });

    const box = ref<HTMLElement>();

    const close = (status: Boolean) => {
      data.show = false;

      setTimeout(() => {
        if (props.closeFunc) {
          props.closeFunc(status);
        }
      }, 300);
    };
    onMounted(() => {
      data.show = true;
      data.top = document.body.clientHeight / 5;
    });
    const updateCenter = () => {
      setTimeout(() => {
        if (box.value) {
          let x = cdk.getCenterXbyBody(box.value);
          data.left = x;
        }
      }, 10);
    };
    return {
      close,
      data,
      box,
    };
  },
};
</script>

<style>
</style>