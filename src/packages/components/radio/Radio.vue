<template>
  <div class="f-radio">
    <div
      class="f-radio-item"
      v-for="(item, i) in data"
      :key="i"
      @click="onItemClick(item)"
      :class="[
        item == v ? 'f-radio-select' : '',
        disables.indexOf(item) > -1 ? 'f-disable' : '',
      ]"
    >
      <f-icon :icon="[item == v ? 'icon-radio' : 'icon-unradio']"></f-icon>
      <span class="txt">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-radio",
  props: {
    data: {
      Array,
      default: () => [],
    },
    modelValue: String,
    disables: {
      type: Array,
      default: () => [],
    },
  },
  created: function () {},
  data: function () {
    return {
      v: this.modelValue,
    };
  },
  watch: {
    modelValue: function () {
      this.v = this.modelValue;
    },
  },
  methods: {
    onItemClick(e) {
      console.log(e);
      let index = this.disables.indexOf(e);
      if (index > -1) {
        return;
      }
      this.$emit("update:modelValue", e);
      this.$emit("change", {
        value: this.e,
      });
    },
  },
};
</script>

<style>
</style>