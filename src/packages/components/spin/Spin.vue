<template>
  <div
    class="f-spin"
    :style="{ display: type == 'block' ? 'block' : 'inline-block' }"
  >
    <FadeAnim>
      <div class="f-spin-mask" v-if="loading">
        <div class="f-spin-mask-center">
          <f-icon icon="loader" class="f-loading"></f-icon>
          <!-- <span class="f-icon icon-loading f-loading"></span> -->
          <label v-if="text">{{ text }}</label>
        </div>
      </div>
    </FadeAnim>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import FadeAnim from "../anim/FadeAnim.vue";
import Icon from "../icon/Icon.vue"
export default {
  name: "f-spin",
  components: {
    FadeAnim,
    'f-icon':Icon
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