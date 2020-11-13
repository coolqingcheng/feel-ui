<template>
  <div class="f-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-menu",
  data() {
    return {
      items: [],
      activeUUID: "默认",
    };
  },
  provide() {
    return {
      menu: this,
    };
  },
  methods: {
    activeItem(guid) {
      this.items.map((item) => {
        let status = item.key == guid;
        if (status) {
          item.component.active();
          this.activeUUID = guid;
        } else {
          item.component.unActive();
        }
      });
    },
    pushItem(component, key) {
      let item = this.items.filter((a) => a.key == key)[0];
      if (!item) {
        this.items.push({
          key: key,
          component: component,
        });
      } else {
        item.component = component;
      }
    },
    checkActive(guid) {
      // console.log(`当前激活:${this.activeUUID} 传入guid:${guid}`);
      return this.activeUUID == guid;
    },
  },
};
</script>

<style>
</style>