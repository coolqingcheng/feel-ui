<template>
  <div class="f-date-picker" ref="datepicker">
    <span
      class="f-icon icon-calendar f-date-icon"
      :class="[data.open ? 'f-active-color' : '']"
    ></span>
    <input
      class="f-input"
      hint="选择日期"
      :class="[data.open ? 'f-input-focus' : '']"
      v-model="data.time"
      @click="inputClick"
      readonly
    />
    <f-drop-anim>
      <div
        class="f-date-picker-body f-shadow"
        v-show="data.open"
        ref="selectPanel"
      >
        <f-date-picker
          @select-time="selectTime($event)"
          :begin="begin"
          :end="end"
          :value="modelValue"
          @close="close"
          @clear="clear"
        ></f-date-picker>
      </div>
    </f-drop-anim>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref, watch, inject } from "vue";
import d from "./date";
import cdk from "../../utils/cdk";
import date from "./date";
import moment from "moment";

interface Data {
  open: boolean;
  time: string;
  date: Date;
}
export default {
  name: "f-date",
  props: {
    modelValue: String,
    format: {
      type: String,
      default: "YYYY-MM-DD",
    },
    /**
     * 范围
     */
    begin: String,
    end: String,
    //  year选择年  month 选择月  day 选择年月日 day-time 选择年月日时分秒 time 选择时分秒
    model: {
      type: String,
      default: "yyyyMMdd",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  setup(props, context) {
    const data = reactive<Data>({
      open: false,
      time: "",
      date: new Date(),
    });
    const selectPanel = ref<HTMLElement>();
    const datepicker = ref<HTMLElement>();
    let formItem = <any>inject("form-item");
    const emitData = (type: string) => {
      if (formItem) {
        console.log("发送" + data.time);

        formItem.update({
          type: type,
          value: data.time,
        });
      }
    };
    const selectTime = (e) => {
      data.time = moment(e).format(props.format);
      context.emit("update:modelValue", data.time);
      emitData("change");
    };
    const close = () => {
      data.open = false;
    };
    onMounted(() => {
      if (selectPanel.value) {
        selectPanel.value.style.top = datepicker.value?.offsetHeight + "px";
      }
      updateTime();
    });
    cdk.outClick(datepicker, () => {
      close();
    });
    const inputClick = () => {
      if (props.disabled) return;
      data.open = !data.open;
    };
    const updateTime = () => {
      if (props.modelValue) {
        data.date = moment(props.modelValue).toDate();
        data.time = moment(props.modelValue).format(props.format).toString();
      }
    };
    watch(() => props.modelValue, updateTime);

    const clear = () => {
      data.time = "";
      context.emit("update:modelValue", data.time);
      emitData("change");
      close();
    };
    return {
      data,
      selectPanel,
      close,
      inputClick,
      datepicker,
      selectTime,
      clear,
    };
  },
};
</script>

<style>
</style>