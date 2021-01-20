<template>
  <button type="button" :class="style" :disabled="readOnly">
    <f-icon icon="loader" class="loading" v-if="loading"></f-icon>
    <slot name="icon" v-if="!loading"> </slot>
    <slot></slot>
    <span class="btn-text" v-if="text">{{ text }}</span>
  </button>
</template>

<script>
import { computed, defineComponent } from "vue";
import Icon from "../icon/Icon.vue";
export default defineComponent({
  name: "f-button",
  components: {
    "f-icon": Icon,
  },
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
    link: {
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

    const style = computed(() => {
      console.log(readOnly.value);
      return [
        `btn btn-${props.type}`,
        readOnly.value == true ? "btn-disabled" : "",
        readOnly.value == false ? `btn-${props.type}-hover` : "btn-disabled",
        props.mini ? "btn-mini" : "",
        props.loading ? "btn-loading" : "",
        readOnly.value ? "" : "btn-active",
        props.link ? `btn-link-${props.type}` : "",
        readOnly.value == false ? `btn-link-${props.type}-hover` : "",
      ];
    });
    return {
      readOnly,
      style,
    };
  },
});
</script>