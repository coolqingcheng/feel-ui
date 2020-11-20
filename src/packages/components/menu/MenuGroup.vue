<template>
  <div class="f-menu-group">
    <div
      class="f-menu-group-header"
      @click="toggle()"
      :style="{ paddingLeft: data.left + 'px' }"
    >
      <span class="f-menu-group-header-label">{{ label }}</span>
      <span
        class="f-menu-group-header-icon f-icon icon-right"
        :class="[data.status ? 'bottom' : 'right']"
      ></span>
    </div>
    <f-expand-transition>
      <div class="f-menu-group-body" v-show="data.status">
        <slot></slot>
      </div>
    </f-expand-transition>
  </div>
</template>

<script>
import { getCurrentInstance, inject, onMounted, provide, reactive } from "vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  name: "f-menu-group",
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive({
      status: props.open,
      left: 15,
      height: 0,
    });
    const group = provide("menu-group", {
      data: data,
    });
    const injetGroup = inject("menu-group");
    onMounted(() => {
      if (injetGroup && injetGroup.data) {
        data.left = injetGroup.data.left + 15;
      }
    });
    const toggle = () => {
      console.log("点击");
      data.status = !data.status;
    };
    const test = () => {
      // console.log(this.$parent);
      // console.log(this.$parent.left);
    };
    const update = () => {
      if (data.status) {
        ctx.refs.body.style.height = data.height + "px";
      } else {
        ctx.refs.body.style.height = "0px";
      }
    };

    return {
      data,
      toggle,
      update,
    };
  },
};
</script>

<style>
</style>