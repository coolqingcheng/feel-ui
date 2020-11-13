<template>
  <div
    class="f-spin"
    :style="{ display: type == 'block' ? 'block' : 'inline-block' }"
  >
    <f-fade-anim>
      <div class="f-spin-mask" v-if="loading">
        <div class="f-spin-mask-center">
          <f-icon icon="icon-loading" class="f-loading"></f-icon>
          <label v-if="text">{{ text }}</label>
        </div>
      </div>
    </f-fade-anim>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-spin",
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