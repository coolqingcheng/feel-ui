<template>
  <div class="f-breadcrumb" ref="breadcrumb">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUpdated,
} from "vue";
import { BreadCrumbInjectKey } from ".";

export default defineComponent({
  name: "f-breadcrumb",
  props: {
    separator: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    const ctx = getCurrentInstance();
    onMounted(() => {updateStatus()});

    const updateStatus = () => {
      var breadcrumb = ctx?.refs.breadcrumb as HTMLElement;
      var items = breadcrumb.querySelectorAll(".f-breadcrumb-item");
      items.forEach(item=>{
        var el =  item.querySelector(
          ".f-breadcrumb-separator"
        ) as HTMLElement
        el.style.display = ""
      })
      if (items && items.length > 0) {
        var el = items[items.length - 1].querySelector(
          ".f-breadcrumb-separator"
        ) as HTMLElement;
        if (el) {
          el.style.display = "none";
        }
      }
    };
    onUpdated(() => {
      updateStatus()
    });
  },
});
</script>

<style>
</style>