<template>
  <div class="f-menu-group">
    <div
      class="f-menu-group-header"
      @click="toggle()"
      :style="{ paddingLeft: data.left + 'px' }"
    >
      <span class="f-menu-group-header-label">
        <slot name="label">{{ label }}</slot>
      </span>
      <span
        class="f-menu-group-header-icon f-icon icon-right"
        :class="[isActive ? 'bottom' : 'right']"
      ></span>
    </div>
    <f-expand-transition>
      <div class="f-menu-group-body" v-show="isActive">
        <slot></slot>
      </div>
    </f-expand-transition>
  </div>
</template>

<script lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  provide,
  reactive,
} from "vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  name: "f-menu-group",
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive({
      left: 15,
      height: 0,
    });
    const group = provide("menu-group", {
      data: data,
    });
    const injetGroup = <any>inject("menu-group", {});
    onMounted(() => {
      if (injetGroup && injetGroup.data) {
        data.left = injetGroup.data.left + 15;
      }
    });
    const menu = <any>inject("menu", {});
    const isActive = computed(() => {
      return menu.checkOpenGroup(props.name);
    });
    const toggle = () => {
      menu.openGroud(props.name);
    };
    const update = () => {
      let el = <HTMLElement>ctx?.refs.body;
      if (isActive) {
        el.style.height = data.height + "px";
      } else {
        el.style.height = "0px";
      }
    };

    return {
      data,
      toggle,
      update,
      isActive,
    };
  },
};
</script>

<style>
</style>