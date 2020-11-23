<template>
  <div class="f-tab-item" v-show="show">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, inject, onMounted, reactive } from "vue";
export default {
  name: "f-tab-item",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    // const tab = <any>inject("tab");
    onMounted(() => {
      // console.log(tab);
      // if (tab) {
      //   tab.register(props.title);
      // }
    });

    const show = true; // computed(() => {
    //   return tab.data.selectTitle == props.title;
    // });

    return {
      show,
    };
  },
};
</script>

<style>
</style>