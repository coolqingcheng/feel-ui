<template>
  <div
    class="f-modal"
    ref="modal"
    :style="{
      bottom: show ? '0' : '',
      zIndex: data.zIndex,
    }"
  >
    <transition name="mask">
      <ModalMask v-if="show"></ModalMask>
    </transition>
    <f-dialog-anim :top="data.top">
      <div
        class="f-dialog f-shadow"
        ref="dialog"
        v-show="show"
        :style="{
          left: data.left + 'px',
          width: width > 0 ? width + 'px' : '',
        }"
      >
        <div class="f-dialog-header drag-target">
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
          <f-icon icon="x" class="f-modal-close" @click="close(false)"></f-icon>
        </div>
        <div class="f-dialog-content">
          <slot></slot>
        </div>
        <div class="f-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </f-dialog-anim>
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance,
  inject,
  onMounted,
  onUpdated,
  reactive,
  ref,
  watch,
} from "vue";
// import ModalBox from "./ModalBox";
import cdk from "../../utils/cdk";
import ModalMask from "./ModalMask.vue";
import ScreenChange from "./ScreenChange";
export default {
  name: "f-dialog",
  components: {
    // ModalBox,
    ModalMask,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 0,
    },
    closeBefore: {
      type: Function,
    },
  },
  setup(props, context) {
    let ctx = getCurrentInstance();
    const data = reactive({
      status: false,
      title: props.title,
      left: 0,
      top: 0,
      zIndex: 100000,
    });
    ScreenChange(() => {
      updateCenter();
    });
    const dialog = ref<HTMLElement>();
    const modal = ref(null);

    watch(
      () => props.show,
      () => {
        data.status = props.show;
        if (data.status) {
          document.body.style.overflow = "hidden";
          updateCenter();
          getTopZindex();
        } else {
          setTimeout(() => {
            let node = document.querySelectorAll(".f-modal .f-modal-mask");
            if (node.length == 1) {
              document.body.style.overflow = "auto";
            }
          }, 300);
        }
      }
    );
    watch(
      () => props.title,
      () => (data.title = props.title)
    );
    const close = (status) => {
      data.status = status;
      if (props.closeBefore) {
        props.closeBefore(() => {
          context.emit("close", { status: status });
        });
      } else {
        context.emit("close", { status: status });
      }
    };
    const updateCenter = () => {
      setTimeout(() => {
        if (dialog.value) {
          let x = cdk.getCenterXbyBody(dialog.value);
          data.left = x;
        }
      }, 10);
    };
    const getTopZindex = () => {
      let indexs: number[] = [];
      let nodes = document.querySelectorAll(".f-modal");
      nodes.forEach((item) => {
        let i = window.getComputedStyle(item).zIndex;
        indexs.push(parseInt(i));
      });
      if (indexs.length > 0) {
        indexs.sort((i, j) => j - i);
        data.zIndex = indexs[0];
      }
    };
    onMounted(() => {
      updateCenter();
      let node = (modal.value as any) as HTMLElement;
      let isexist = false;
      document.querySelectorAll(".f-modal").forEach((item) => {
        if (item === node) {
          isexist = true;
        }
      });
      getTopZindex();
      inject("dialog", {
        close: close,
      });
      data.top = document.body.clientHeight / 5;
    });

    return {
      data,
      close,
      dialog,
      modal,
    };
  },
};
</script>

<style>
</style>