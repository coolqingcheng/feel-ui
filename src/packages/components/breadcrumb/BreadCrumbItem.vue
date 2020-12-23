<template>
  <span class="f-breadcrumb-item">
    <span class="f-breadcrumb-text" @click="textClick" :class="{'f-breadcrumb-link':isLink}"><slot></slot></span>
    <span class="f-breadcrumb-separator">
      <slot name="separator">/</slot>
    </span>
  </span>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
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

    const isLink = computed(() => {
      return props.path ? true : false;
    });

    return {
      textClick,
      isLink
    };
  },
};
</script>

<style>
</style>