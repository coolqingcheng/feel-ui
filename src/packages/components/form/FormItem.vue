<template>
  <div class="f-form-item">
    <div class="f-form-item-label" :style="{width:width+'px'}">
      <span v-if="label">{{label}}:</span>
    </div>
    <div class="f-form-item-input">
      <div class="f-form-item-input-item">
        <slot></slot>
      </div>
      <div class="f-form-error-message">
        <span v-if="message.length>0">{{message}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-form-item",
  props: {
    for: {
      type: String,
      default: "",
      required: true,
    },
    label: String,
  },
  inject: ["form"],
  data() {
    return {
      message: "",
    };
  },
  computed: {
    width() {
      return this.form.labelWidth;
    },
  },
};
</script>

<style>
</style>