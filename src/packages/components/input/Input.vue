<template>
  <!-- <div :class="[type=='text'?'f-item-box':'f-item-box-textarea',status]"> -->
  <template v-if="type != 'textarea'">
    <input
      class="f-input"
      :type="type"
      :value="modelValue"
      @click="onClick"
      @input="inputHandler($event)"
      :placeholder="hint"
      @change="inputChange($event)"
      @blur="inputBlur($event)"
      :disabled="disabled"
      @focus="onFocus($event)"
      autocomplete="false"
    />
  </template>
  <template v-if="type == 'textarea'">
    <textarea
      :rows="row"
      class="f-textarea"
      :value="modelValue"
      @click="onClick"
      @input="inputHandler($event)"
      :placeholder="hint"
      @change="inputChange($event)"
      @blur="inputBlur($event)"
      :disabled="disabled"
      @focus="onFocus($event)"
      autocomplete="false"
    />
  </template>
  <!-- </div> -->
</template>

<script>
export default {
  name: "f-input",
  props: {
    modelValue: String,
    type: {
      // textarea 和 text 两种类型
      type: String,
      default: "text",
    },
    hint: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 6,
    },
  },
  data: function () {
    return {
      v: this.value,
      status: "",
    };
  },
  watch: {
    modelValue: function () {
      console.log("修改modelValue:" + this.modelValue);
      this.v = this.modelValue;
    },
  },
  methods: {
    inputHandler(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("input", e);
    },
    inputChange(e) {
      this.$emit("change", e);
      this.emitData();
    },
    inputBlur(e) {
      this.emitData();
      this.$emit("blur", e);
      this.status = "";
    },
    onFocus(e) {
      this.$emit("focus", e);
      this.status = "f-item-box-active";
    },
    onClick(e) {
      this.$emit("click", e);
    },
    emitData() {
      //   if (this.isInFieldItem()) {
      //     // this.$parent.$emit("form-input-update-status", {
      //     //   component: this,
      //     //   value: this.v,
      //     // });
      //   }
    },
  },
};
</script>

<style>
/* .f-input {
} */
</style>