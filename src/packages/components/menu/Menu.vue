<template>
  <div class="f-menu" :style="{ width: width + 'px' }">
    <slot></slot>
    <span></span>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, PropType, provide, reactive, watch } from "vue";
export default {
  name: "f-menu",
  props: {
    activeId: {
      type: String,
    },
    width: {
      type: String,
      default: "250",
    },

    openGroups: {
      type: Array as PropType<Array<String>>,
      default: () => [],
    },
  },
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive({
      items: [],
      activeID: props.activeId,
      openGroups: props.openGroups,
    });
    watch(
      () => props.activeId,
      () => {
        data.activeID = props.activeId;
      }
    );
    watch(
      () => props.openGroups,
      () => {
        data.openGroups = props.openGroups;
      }
    );
    const activeItem = (id) => {
      if (data.activeID !== id) {
        data.activeID = id;
      }
    };

    const checkOpenGroup = (name: String) => {
      let index = data.openGroups?.findIndex((a) => a == name);
      return index > -1;
    };

    const openGroud = (name: String) => {
      let index = data.openGroups.findIndex((a) => a == name);
      if (index > -1) {
        data.openGroups.splice(index, 1);
      } else {
        data.openGroups.push(name);
      }

      ctx?.emit("expand", {
        name: name,
        open: index == -1,
      });
    };

    const checkActive = (id) => {
      ctx?.emit("active", {
        id: id,
      });
      return data.activeID == id;
    };
    provide("menu", {
      checkActive: checkActive,
      activeItem: activeItem,
      checkOpenGroup: checkOpenGroup,
      openGroud: openGroud,
    });
  },
};
</script>

<style>
</style>