<template>
  <span class="f-breadcrumb-item">
    <span
      class="f-breadcrumb-text"
      @click="textClick"
      :class="{ 'f-breadcrumb-link': isLink }"
      ><slot></slot
    ></span>
    <span class="f-breadcrumb-separator">
      <slot name="separator">{{ separator }}</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, getCurrentInstance, inject } from "vue";
import { BreadCrumbInjectKey } from "./index";
export default {
  name: "f-breadcrumb-item",
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const textClick = async () => {
      if (props.path) {
        if (instance) {
          let router = instance.appContext.config.globalProperties.$router;
          if (router) {
            router.push(props.path);
          }
        }
      }
    };

    var breadcrumb = inject(BreadCrumbInjectKey);

    const isLink = computed(() => {
      return props.path ? true : false;
    });

    const separator = computed(() => {
      return breadcrumb?.separator;
    });

    return {
      textClick,
      isLink,
      separator,
    };
  },
};
</script>

<style>
</style>