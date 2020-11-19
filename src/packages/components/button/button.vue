<template>
  <button
    type="button"
    :class="[
      `btn btn-${type}`,
      readOnly == true ? 'btn-disabled' : '',
      readOnly == false ? `btn-${type}-hover ` : 'btn-disabled',
      mini ? 'btn-mini' : '',
      loading ? 'btn-loading' : '',
      readOnly ? '' : 'btn-active',
    ]"
    :disabled="readOnly"
  >
    <span class="f-icon icon-loading loading" v-if="loading"></span>
    <slot name="icon" v-if="!loading"> </slot>
    <slot></slot>
    <span class="btn-text" v-if="text">{{ text }}</span>
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "f-button",
  props: {
    type: {
      type: String,
      default: "info",
    },
    text: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mini: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
  setup(props) {
    const readOnly = computed(() => {
      if (props.disabled) {
        return true;
      }
      if (props.loading) {
        return true;
      }
      return false;
    });
    return {
      readOnly,
    };
  },
};
</script>