<template>
  <div class="f-timeline-item" :class="{'showline':showLine}">
    <div class="f-timeline-item-header">
      <slot name="axis">
        <div class="f-timeline-axis"></div>
      </slot>
      <div class="f-timeline-item-title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="f-timeline-item-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-timeline-item",
  props: {
    showLine: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>