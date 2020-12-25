<template>
  <div class="f-card">
    <div class="f-card-header" v-if="showHeader()">
      <slot name="header"></slot>
    </div>
    <div class="f-card-body">
      <slot></slot>
    </div>
    <div class="f-card-footer" v-if="showFooter()">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  getCurrentInstance,
  onMounted,
  onUpdated,
  reactive,
} from "vue";
export default {
  name: "f-card",
  setup() {
    const ctx = getCurrentInstance();
    onMounted(() => {
      let footer = ctx?.slots["footer"];


      console.log(footer?.length);
    });
    const showFooter = () => {
      if (ctx?.slots["footer"]) {
        return true;
      }
      return false;
    };
    const showHeader = () => {
      if (ctx?.slots["header"]) {
        return true;
      }
      return false;
    };
    return {
      showFooter,
      showHeader,
    };
  },
};
</script>

<style>
</style>