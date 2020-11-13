<template>
  <div class="f-date-picker" ref="datepicker">
    <span
      class="f-icon icon-time f-date-icon"
      :class="[data.open ? 'f-active-color' : '']"
    ></span>
    <input
      class="f-input"
      :class="[data.open ? 'f-input-focus' : '']"
      readonly
      :value="data.value"
      @click="inputClick"
    />
    <f-drop-anim>
      <div
        class="f-date-picker-body f-shadow"
        :style="{ top: el.height + 'px' }"
        v-if="data.open"
        ref="selectPanel"
      >
        <slot name="body"></slot>
      </div>
    </f-drop-anim>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, provide, reactive, ref } from "vue";
import cdk from "@/packages/utils/cdk";
export default {
  props: {
    modelValue: String,
  },
  setup(props) {
    const data = reactive({
      open: false,
      value: "",
    });

    const el = reactive({
      height: 0,
    });
    onMounted(() => {
      el.height = parseFloat(
        getComputedStyle(<Element>datepicker.value).height
      );
    });

    const datepicker = ref<HTMLElement>();
    const close = () => {
      data.open = false;
    };
    const clear = () => {
      data.value = "";
    };
    const inputClick = () => {
      data.open = !data.open;
    };
    cdk.outClick(datepicker, () => {
      close();
    });

    const setValue = (e: string) => {
      data.value = e;
    };
    return {
      close,
      clear,
      data,
      inputClick,
      datepicker,
      el,
      setValue,
    };
  },
};
</script>

<style>
</style>