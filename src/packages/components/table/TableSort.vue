<template>
  <div class="f-table-sort">
    <i
      class="f-table-sort-asc"
      :style="{ borderBottomColor: value == 'asc' ? '#000' : '' }"
      @click="itemClick(true)"
    ></i>
    <i
      class="f-table-sort-desc"
      :style="{ borderTopColor: value == 'desc' ? '#000' : '' }"
      @click="itemClick(false)"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "",
      validator: (v) => ["", "desc", "asc"].indexOf(v) !== -1,
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
    itemClick(v) {
      //   if (v) {
      //     this.value = "asc";
      //   } else {
      //     this.value = "desc";
      //   }
      this.$emit("change", {
        value: v,
      });
    },
  },
};
</script>

<style>
</style>