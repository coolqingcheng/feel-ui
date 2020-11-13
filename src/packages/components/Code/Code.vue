<template>
  <div class="f-code">
    <div class="f-code-header" @click="testClick">
      <f-icon icon="icon-code"></f-icon>
      <span class="f-code-text">{{ show ? "隐藏代码" : "查看代码" }}</span>
    </div>
    <f-expand-anim>
      <div class="f-code-content" v-if="show">
        <slot></slot>
      </div>
    </f-expand-anim>
  </div>
</template>

<script>
export default {
  name: "f-code",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    testClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>