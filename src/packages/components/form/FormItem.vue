<template>
  <div
    class="f-form-item"
    :style="{ width: width, marginBottom: marginBottom }"
    :class="{ 'f-form-item-v': data.direction == 'v' }"
  >
    <div class="f-form-item-label" :style="{ width: labelWidth + 'px' }">
      <span v-if="label">{{ label }}:</span>
    </div>
    <div class="f-form-item-input">
      <div class="f-form-item-input-item">
        <slot></slot>
      </div>
      <div class="f-form-error-message">
        <f-fade-anim>
          <span v-if="showMessage.show">
            <slot name="error" v-on:message="showMessage">{{
              showMessage.message
            }}</slot>
          </span>
        </f-fade-anim>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  watch,
} from "vue";
import mitt from "mitt";
import { FormEvent } from "*.vue";

import {
  formItemInjectKey,
  FormItemInject,
  formInjectKey,
  FormInject,
} from "./formOption";

export default {
  name: "f-form-item",
  props: {
    for: {
      type: String,
      default: "",
    },
    label: String,
    trigger: {
      type: String,
      default: "change",
    },
    width: {
      type: String,
      default: "100%",
    },
    direction: {
      type: String,
      default: "",
      validator: (v: string) => {
        return ["h", "v", ""].indexOf(v) > -1;
      },
    },
  },
  setup(props) {
    const data = reactive({
      message: "",
      direction: "h",
    });
    const event = mitt();
    const form = inject<FormInject>(formInjectKey);
    if (form) {
      if (props.direction == "") {
        data.direction = form?.direction;
      } else {
        data.direction = props.direction;
      }
    }
    const showMessage = computed(() => {
      let items = form?.fieldValid(props.for);
      if (items && items?.length > 0) {
        return {
          message: items[0].message,
          show: true,
        };
      }
      return {
        show: false,
      };
    });

    watch(
      () => form?.direction,
      () => {
        console.log("监听方向");

        if (form?.direction) {
          data.direction = form?.direction;
        }
      }
    );

    const labelWidth = computed(() => {
      return form?.data.labelWidth;
    });

    onMounted(() => {});

    const formItemUpdate = async (e: FormEvent | undefined) => {
      if (e) {
        if (props.trigger == e.type) {
          await form?.validateItem(props.for);
        }
      }
    };
    provide<FormItemInject>(formItemInjectKey, {
      update: formItemUpdate,
    });
    onUnmounted(() => {
      event.all.clear();
    });

    const marginBottom = computed(() => {
      if (!props.label) {
        return "3px";
      }
    });

    return {
      data,
      labelWidth,
      showMessage,
      marginBottom,
    };
  },
};
</script>

<style>
</style>