<template>
  <div class="f-checkbox">
    <div
      class="f-checkbox-item"
      v-for="(item, i) in data.data"
      :key="i"
      @click="itemClick(item)"
      :class="[
        data.selectData.indexOf(item) == -1 ? '' : 'checkbox-select',
        disables.indexOf(item) > -1 ? 'f-disable' : '',
      ]"
    >
      <f-icon
        :icon="
          data.selectData.indexOf(item) == -1 ? 'icon-uncheck' : 'icon-checked'
        "
      ></f-icon>
      <span class="txt" v-if="showText">{{ item }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, watch, inject } from "vue";
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
  setup(props, context) {
    const data = reactive({
      selectData: props.modelValue,
      data: props.data,
    });
    watch(
      () => props.modelValue,
      () => {
        data.selectData = props.modelValue;
      }
    );
    let formItem = <any>inject("form-item");
    const emitData = (type: string) => {
      if (formItem) {
        formItem.update({
          type: type,
          value: data.selectData,
        });
      }
    };
    const itemClick = (item) => {
      let index = props.disables.indexOf(item);
      if (index > -1) {
        return;
      }
      index = data.selectData.indexOf(item);
      if (index == -1) {
        data.selectData.push(item);
      } else {
        data.selectData.splice(index, 1);
      }
      console.log(data.selectData);
      context.emit("update:modelValue", data.selectData);
      context.emit("select", {
        value: item,
      });
      emitData("change");
    };

    return {
      itemClick,
      data,
    };
  },
};
</script>

<style>
</style>