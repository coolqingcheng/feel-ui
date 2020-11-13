<template>
  <div class="f-checkbox">
    <div
      class="f-checkbox-item"
      v-for="(item, i) in data"
      :key="i"
      @click="itemClick(item)"
      :class="[
        selectData.indexOf(item) == -1 ? '' : 'checkbox-select',
        disables.indexOf(item) > -1 ? 'f-disable' : '',
      ]"
    >
      <f-icon
        :icon="[
          selectData.indexOf(item) == -1 ? 'icon-uncheck' : 'icon-checked',
        ]"
      ></f-icon>
      <span class="txt" v-if="showText">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-checkbox",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    showText: {
      type: Boolean,
      default: true,
    },
    disables: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      selectData: this.modelValue,
    };
  },
  watch: {
    modelValue: function () {
      this.selectData = this.modelValue;
    },
  },
  methods: {
    itemClick(item) {
      console.log("点击:" + item);
      let index = this.disables.indexOf(item);
      if (index > -1) {
        return;
      }
      index = this.selectData.indexOf(item);
      if (index == -1) {
        this.selectData.push(item);
      } else {
        this.selectData.splice(index, 1);
      }
      console.log(this.selectData);
      this.$emit("update:modelValue", this.selectData);
      this.$emit("select", {
        value: item,
      });
    },
  },
};
</script>

<style>
</style>