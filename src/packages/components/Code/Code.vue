<template>
  <div class="f-code" v-if="showcode">
    <div class="f-code-header" @click="testClick">
      <f-icon type="feather" icon="code"></f-icon>
      <span class="f-code-text m-l-2">{{
        show ? "隐藏代码" : "查看代码"
      }}</span>
    </div>
    <ExpandAnim>
      <div class="f-code-content" v-if="show">
        <slot></slot>
      </div>
    </ExpandAnim>
  </div>
</template>

<script>
import ExpandAnim from "../anim/ExpandAnim.vue";
export default {
  components: {
    ExpandAnim,
  },
  name: "f-code",
  props: {
    showcode: {
      type: Boolean,
      default: true,
    },
  },
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