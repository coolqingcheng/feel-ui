<template>
  <div class="f-collapse-panel" :class="[show ? 'f-collapse-open' : '']">
    <div
      class="f-collapse-panel-header"
      @click="panelClick"
      :class="[!show ? 'f-collapse-close' : '']"
    >
      <div>
        <slot name="header">{{ label }}</slot>
      </div>
      <div>
        <span
          class="f-icon icon-right"
          :class="[show ? 'bottom' : 'right']"
        ></span>
      </div>
    </div>
    <f-expand-transition>
      <div class="f-collapse-panel-body" v-show="show">
        <div
          class="body"
          :style="{
            minHeight: data.height + 'px',
            maxheight: data.height + 'px',
          }"
        >
          <slot name="body"></slot>
        </div>
      </div>
    </f-expand-transition>
  </div>
</template>

<script lang="ts">
import { computed, inject, onMounted, reactive } from "vue";
import { guid } from "../../utils/feelutils";
export default {
  name: "f-collapse-panel",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: String,
  },
  setup(props) {
    const data = reactive({
      height: 200,
    });
    onMounted(() => {
      data.height = collapse.data.height;
    });
    const collapse = <any>inject("collapse");
    const show = computed(() => {
      let index = collapse.data.panels.indexOf(props.id);
      return index > -1;
    });
    const panelClick = () => {
      collapse.event.emit("expand", { id: props.id });
    };
    return {
      data,
      show,
      panelClick,
    };
  },
};
</script>

<style>
</style>