<template>
  <div class="f-rate" :style="{fontSize:size+'px'}">
    <template v-for="item in count" :key="item">
      <div class="f-rate-item" @mouseout="data.hoverValue=0">
        <div class="f-rate-item-first" v-if="half" :class="
        {'f-rate-item-hover':needHoverColor(item,.5)}
        " :style="{Color:needHoverColor(item,.5)?color:''}" @mouseover="hoverEvent($event,item-0.5,1)" @click="hoverEvent($event,item-.5,1)">
          <slot>
            <f-icon icon="star" :width="size"></f-icon>
          </slot>
        </div>
        <div class="f-rate-item-second" :class="
        {'f-rate-item-hover':needHoverColor(item,0)}
        " :style="{'color':needHoverColor(item,0)?color:''}" @mouseover="hoverEvent($event,item,2)" @click="hoverEvent($event,item,2)">
          <slot>
            <f-icon icon="star" :width="size"></f-icon>
          </slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref, watch } from "vue";
export default defineComponent({
  name: "f-rate",
  props: {
    color: {
      type: String,
    },
    bg: {
      type: String,
    },
    count: {
      type: Number,
      default: 5,
      validator: (v: number) => {
        return v > 0;
      },
    },
    size: {
      type: String,
      default: 24,
    },
    modelValue: {
      type: Number,
      default: 0,
      validator: (v: number) => {
        return v % 0.5 == 0;
      },
    },
    half: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hoverEvent = (event: MouseEvent, i: number, type: number) => {
      event.stopPropagation();
      if (props.readonly) return;
      if (event.type == "mouseover") {
        data.hoverValue = i;
      }
      if (event.type == "click") {
        if (data.value == i) {
          data.value = 0;
          data.hoverValue = 0;
        } else {
          data.value = i;
        }
      }
    };
    const data = reactive({
      value: props.modelValue,
      hoverValue: 0,
    });
    const ctx = getCurrentInstance();
    watch(
      () => data.value,
      () => {
        ctx?.emit("update:modelValue", data.value);
      }
    );

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue >= props.count) {
          data.value = props.count;
        } else {
          data.value = props.modelValue;
        }
      }
    );

    const needHoverColor = (item: number, interpolation: number) => {
      return (
        (item - interpolation <= data.hoverValue && data.hoverValue > 0) ||
        item - interpolation <= data.value
      );
    };

    const hoverColor = ref(props.color);

    return {
      hoverEvent,
      data,
      needHoverColor,
      hoverColor,
    };
  },
});
</script>

<style>
</style>