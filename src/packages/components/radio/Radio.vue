<template>
  <div class="f-radio">
    <div
      class="f-radio-item"
      v-for="(item, i) in data.data"
      :key="i"
      @click="onItemClick(item)"
      :class="[
        item == data.v ? 'f-radio-select' : '',
        disables.indexOf(item) > -1 ? 'f-disable' : '',
      ]"
    >
      <f-icon :icon="item == data.v ? 'icon-radio' : 'icon-unradio'"></f-icon>
      <span class="txt">{{ item }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, inject, reactive, watch } from "vue";
export default {
  name: "f-radio",
  props: {
    data: {
      Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
    },
    disables: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive({
      v: props.modelValue,
      data: props.data,
    });
    watch(
      () => props.modelValue,
      () => {
        data.v = props.modelValue;
      }
    );

    let formItem = <any>inject("form-item");
    const emitData = (type: string) => {
      if (formItem) {
        formItem.update({
          type: type,
          value: data.v,
        });
      }
    };
    const onItemClick = (e) => {
      let index = props.disables.indexOf(e);
      console.log(index);
      if (index > -1) {
        return;
      }
      data.v = e;
      ctx?.emit("update:modelValue", e);
      ctx?.emit("change", {
        value: e,
      });
      emitData("change");
    };

    return {
      data,
      onItemClick,
    };
  },
};
</script>

<style>
</style>