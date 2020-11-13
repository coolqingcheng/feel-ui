<template>
  <div class="f-tab-item" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-tab-item",
  props: {
    title: {
      type: String,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      status: false,
    };
  },
  inject: ["tab"],
  mounted: function () {
    this.tab.register(this.title);
  },
  computed: {
    show() {
      return this.tab.selectTitle == this.title;
    },
  },
};
</script>

<style>
</style>