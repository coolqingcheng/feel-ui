<template>
  <div class="f-select" ref="selectRef">
    <input
      :readonly="!search"
      class="f-select-input p-l-1"
      @click="inputClick"
      :placeholder="hint"
      :value="data.selectValue"
      @input="searchChange"
    />
    <div
      class="f-select-icon"
      :class="[data.show ? 'f-select-icon-active' : '']"
    >
      <f-icon icon="icon-right"></f-icon>
    </div>
    <f-drop-anim>
      <div class="f-select-options f-shadow" v-show="data.show">
        <div class="option option-tip" @click="itemClick(null)">{{ hint }}</div>
        <div
          class="option"
          v-for="(item, i) in data.data"
          :key="i"
          @click="itemClick(item)"
        >
          {{ item.value }}
        </div>
      </div>
    </f-drop-anim>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onUnmounted,
  PropType,
  reactive,
  ref,
  watch,
  inject,
} from "vue";

import cdk from "../../utils/cdk";

interface SelectDto {
  key: string;
  value: string;
}

export default defineComponent({
  name: "f-select",
  props: {
    data: {
      type: Array as PropType<SelectDto[]>,
      default: () => [],
    },
    hint: {
      type: String,
      default: "请选择",
    },
    modelValue: {
      type: String,
    },
    search: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const ctx = getCurrentInstance();

    const selectRef = ref();
    const data = reactive({
      show: false,
      select: { key: "", value: "" },
      data: props.data,
      selectValue: "",
    });
    watch(
      () => props.modelValue,
      () => {
        let item = props.data.filter((a) => a.value == props.modelValue);
        if (item.length > 0) {
          data.select = {
            key: item[0].key,
            value: item[0].value,
          };
        }
      }
    );
    watch(
      () => props.data,
      () => {
        data.data = props.data;
      }
    );
    watch(
      () => data.show,
      () => {
        context.emit(data.show ? "show" : "close", { status: data.show });
      }
    );
    let formItem = <any>inject("form-item");
    const emitData = (type: string) => {
      if (formItem) {
        formItem.update({
          type: type,
          value: data.select.key,
        });
      }
    };
    const itemClick = (e: SelectDto) => {
      if (e == null) {
        data.show = false;
        data.select.key = "";
        data.select.value = "";
        data.selectValue = "";
        context.emit("update:modelValue", "");
      } else {
        data.select.key = e.key;
        data.select.value = e.value;
        context.emit("update:modelValue", e.key);
        data.show = false;
        data.selectValue = e.value;
      }
      emitData('change')
      context.emit("itemClick", {
        data: e,
      });
    };
    const inputClick = () => {
      data.show = !data.show;
    };
    cdk.outClick(selectRef, () => {
      data.show = false;
    });
    const searchChange = (e) => {
      console.log(e.target.value);
      let value = e.target.value;
      data.data = props.data.filter((a) => a.value.indexOf(value) > -1);
    };
    return {
      itemClick,
      inputClick,
      data,
      searchChange,
      selectRef,
    };
  },
});
</script>

<style>
</style>