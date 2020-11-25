<template>
  <!-- <div :class="[type=='text'?'f-item-box':'f-item-box-textarea',status]"> -->
  <div class="f-input-container" :style="{ width: width }">
    <template v-if="type != 'textarea'">
      <input
        class="f-input"
        :type="type"
        v-model="data.v"
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
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, inject, reactive, watch } from "vue";

import cdk from "@/packages/utils/cdk";
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
    width: {
      type: String,
      default: "100%",
    },
  },
  setup(props, context) {
    const ctx = getCurrentInstance();
    const data = reactive({
      v: props.modelValue,
      status: "",
    });

    watch(
      () => props.modelValue,
      () => {
        data.v = props.modelValue;
      }
    );

    const inputHandler = (e) => {
      context.emit("update:modelValue", e.target.value);
      context.emit("input", e);
    };
    const inputChange = (e) => {
      context.emit("change", e);
      emitData("change");
    };
    const inputBlur = (e) => {
      context.emit("blur", e);
      emitData("blur");
      data.status = "";
    };
    const onFocus = (e) => {
      context.emit("focus", e);
      data.status = "f-item-box-active";
    };
    const onClick = (e) => {
      context.emit("click", e);
    };
    let formItem = <any>inject("form-item", {});
    const emitData = (type: string) => {
      if (formItem) {
        formItem.update({
          type: type,
          value: data.v,
        });
      }
    };

    return {
      data,
      inputHandler,
      inputChange,
      inputBlur,
      onFocus,
      onClick,
    };
  },
  methods: {
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
