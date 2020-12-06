<template>
  <div class="f-table-radio">
    <span
      class="f-radio-icon"
      @click="itemClick"
      :class="[value == false ? '' : 'f-radio-icon-checked']"
    ></span>
  </div>
</template>

<script>
export default {
  name: "f-table-radio",
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