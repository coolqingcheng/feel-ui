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
import { computed, inject } from "vue";
import { useRouter } from "vue-router";
import { BreadCrumbInjectKey } from ".";
export default {
  name: "f-breadcrumb-item",
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const router = useRouter();
    const textClick = () => {
      if (props.path) {
        router.push({
          path: props.path,
        });
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