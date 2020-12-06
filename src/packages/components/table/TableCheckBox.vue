<template>
  <div class="f-table-checkbox">
    <span
    class="f-checkbox-icon"
      @click="itemClick"
      :class="[
        value == false ? 'f-checkbox-icon-unselected' : 'f-checkbox-icon-seleced',
      ]"
    ></span>
  </div>
</template>

<script>
export default {
  name: "f-table-checkbox",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.status,
    };
  },
  watch: {
    status: function () {
      this.value = this.status;
    },
  },
  methods: {
    itemClick() {
      this.$emit("change", { value: !this.value });
    },
  },
};
</script>

<style>
</style>