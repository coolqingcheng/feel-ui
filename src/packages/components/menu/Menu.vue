<template>
  <div class="f-menu">
    <slot></slot>
    <span></span>
  </div>
</template>

<script>
import { getCurrentInstance, provide, reactive } from "vue";
export default {
  name: "f-menu",
  setup() {
    const ctx = getCurrentInstance();
    const data = reactive({
      items: [],
      activeUUID: "默认",
    });
    const activeItem = (guid) => {
      data.items.map((item) => {
        let status = item.key == guid;
        if (status) {
          item.component.active();
          data.activeUUID = guid;
        } else {
          item.component.unActive();
        }
      });
    };
    const pushItem = (component, key) => {
      let item = data.items.filter((a) => a.key == key)[0];
      if (!item) {
        data.items.push({
          key: key,
          component: component,
        });
      } else {
        item.component = component;
      }
    };
    const checkActive = (guid) => {
      // console.log(`当前激活:${this.activeUUID} 传入guid:${guid}`);
      return data.activeUUID == guid;
    };
    provide("menu", {
      checkActive: checkActive,
      pushItem: pushItem,
      activeItem: activeItem,
    });
  },
};
</script>

<style>
</style>