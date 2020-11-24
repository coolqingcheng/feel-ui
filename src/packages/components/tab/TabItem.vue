<template>
  <div class="f-tab-item" v-show="show">
    {{ data.title }}
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  reactive,
  watch,
} from "vue";
import { TabInject } from "./Tab.vue";
export default defineComponent({
  name: "f-tab-item",
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const tab = inject<TabInject>("tab");
    const data = reactive({
      title: props.title,
    });
    watch(
      () => props.title,
      () => {
        data.title = props.title;
        if (props.title) {
          tab?.register(props.title);
        }
      }
    );
    onMounted(() => {
      // console.log("title:" + props.title);
      // if (!props.title) throw new Error("title不能为空");
      if (props.title) {
        tab?.register(props.title);
      }
    });

    const show = computed(() => {
      return tab?.data.selectTitle == props.title;
    });

    return {
      show,
      data,
    };
  },
});
</script>

<style>
</style>