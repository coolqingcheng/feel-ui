<template>
  <div
    class="f-menu-item"
    @click="itemClick()"
    :class="[data.status ? 'f-menu-item-active' : '']"
  >
    <div class="f-menu-item-left" :style="{ paddingLeft: left + 'px' }">
      <!-- <span>icon:{{ data.status }}</span> -->
      <span class="f-menu-item-left-label">{{ label }}</span>
    </div>
    <div class="f-menu-item-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, getCurrentInstance, inject, onMounted, reactive } from "vue";
export default {
  name: "f-menu-item",
  props: {
    label: {
      type: String,
      default: "label",
    },
    id: {
      type: String,
      default: "0",
    },
  },

  setup(props) {
    let ctx = getCurrentInstance();
    const data = reactive({
      status: false,
    });
    onMounted(() => {
      data.status = menu.checkActive(props.id);
    });
    const menu = inject("menu");
    const group = inject("menu-group");

    const itemClick = () => {
      if (props.id) {
      } else {
        console.error("ID没有设置，无法选中");
      }
      // console.log("修改状态前:" + this.status);
      // if (menu.checkActive(this.uuid)) {
      //   return;
      // }
      // this.menu.activeItem(this.uuid);
      // console.log("修改状态后:" + this.status);
    };
    const active = () => {
      // console.log("点击:" + status + " - uuid:" + this.uuid);
      data.status = true;
      // console.log("修改后的状态:" + this.status);
    };
    const unActive = () => {
      data.status = false;
    };

    const left = computed(() => {
      return group.data.left + 15;
    });

    return {
      data,
      itemClick,
      active,
      unActive,
      left,
    };
  },
  created() {
    let parent = this.$parent;
    // console.log(parent);
    // if (parent.$options._componentTag == "f-menu-group") {
    //   console.log("item");
    //   this.left = parent.left + 25;
    // }
  },
};
</script>

<style>
</style>