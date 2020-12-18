<template>
  <div class="f-drawer">
    <div class="f-drawer-wrapper">
      <FadeAnim>
        <div
          class="f-drawer-overlay"
          ref="mask"
          @click="maskClick"
          v-if="modelValue"
        ></div>
      </FadeAnim>
      <div class="f-drawer-container" :style="dirStyle">
        <div class="f-drawer-header" v-if="showHeader">
          <slot name="header">
            {{ title }}
          </slot>
        </div>
        <div class="f-drawer-body">
          <slot></slot>
        </div>
        <div class="f-drawer-footer" v-if="showFooter">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
  watch,
} from "vue";

import FadeAnim from "../anim/FadeAnim.vue";

export default defineComponent({
  name: "f-drawer",
  components: {
    FadeAnim,
  },
  props: {
    direction: {
      type: String,
      default: "right",
      validator: (v: string) =>
        ["left", "top", "right", "bottom"].indexOf(v) > -1,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 250,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const dirStyle = computed(() => {
      if (props.direction == "right") {
        return `right:${props.modelValue ? 0 : -props.width}px;width:${
          props.width
        }px;top:0;bottom:0`;
      }
      if (props.direction == "left") {
        return `left:${props.modelValue ? 0 : -props.width}px;width:${
          props.width
        }px;top:0;bottom:0`;
      }
      if (props.direction == "top") {
        return `top:${props.modelValue ? 0 : -props.height}px;height:${
          props.height
        }px;width:100%;left:0;right:0`;
      }
      if (props.direction == "bottom") {
        return `bottom:${props.modelValue ? 0 : -props.height}px;height:${
          props.height
        }px;left:0;right:0;`;
      }
      return "";
    });

    const mask = ref<HTMLElement>();
    const ctx = getCurrentInstance();
    const maskClick = () => {
      ctx?.emit("update:modelValue", false);
    };
    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          ctx?.emit("open");
        } else {
          ctx?.emit("close");
        }
      }
    );

    return {
      mask,
      maskClick,
      dirStyle,
    };
  },
});
</script>

<style>
</style>