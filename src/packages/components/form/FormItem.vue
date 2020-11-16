<template>
  <div class="f-form-item">
    <div class="f-form-item-label" :style="{ width: width + 'px' }">
      <span v-if="label">{{ label }}</span>
    </div>
    <div class="f-form-item-input">
      <div class="f-form-item-input-item">
        <slot></slot>
      </div>
      <div class="f-form-error-message">
        <f-fade-anim>
          <span v-if="showMessage.show">{{ showMessage.message }}</span>
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
} from "vue";
import mitt from "mitt";
import { FormEvent, ValidField } from "*.vue";
export default {
  name: "f-form-item",
  props: {
    for: {
      type: String,
      default: "",
      required: true,
    },
    label: String,
    trigger: {
      type: String,
      default: "change",
    },
  },
  setup(props) {
    const data = reactive({
      message: "",
    });
    const event = mitt();
    const form = <any>inject("form");
    console.log(form);
    const showMessage = computed(() => {
      let items = <ValidField[]>form.fieldValid(props.for);
      if (items?.length > 0) {
        return {
          message: items[0].message,
          show: true,
        };
      }
      return {
        show: false,
      };
    });
    const width = computed(() => {
      return form.data.labelWidth;
    });

    onMounted(() => {});

    const formItemUpdate = (e: FormEvent | undefined) => {
      if (e) {
        console.log("更新当前的form:");
        console.log(e);
      }
    };
    provide("form-item", {
      update: formItemUpdate,
    });
    onUnmounted(() => {
      event.all.clear();
    });
    return {
      data,
      width,
      showMessage,
    };
  },
};
</script>

<style>
</style>