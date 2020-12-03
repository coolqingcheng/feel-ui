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
    <f-icon icon="loader" class="loading" v-if="loading"></f-icon>
    <slot name="icon" v-if="!loading"> </slot>
    <slot></slot>
    <span class="btn-text" v-if="text">{{ text }}</span>
  </button>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent( {
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
})
</script>