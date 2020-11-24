<template>
  <div
    class="f-spin"
    :style="{ display: type == 'block' ? 'block' : 'inline-block' }"
  >
    <FadeAnim>
      <div class="f-spin-mask" v-if="loading">
        <div class="f-spin-mask-center">
          <span class="f-icon icon-loading f-loading"></span>
          <label v-if="text">{{ text }}</label>
        </div>
      </div>
    </FadeAnim>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import FadeAnim from "@/packages/components/anim/FadeAnim.vue";
export default {
  name: "f-spin",
  components: {
    FadeAnim,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "block",
    },
    text: String,
  },
};
</script>

<style>
</style>