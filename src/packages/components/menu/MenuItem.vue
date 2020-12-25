<template>
  <div
    class="f-menu-item"
    @click="itemClick()"
    :class="[activeStatus ? 'f-menu-item-active' : '']"
  >
    <div class="f-menu-item-left" :style="{ paddingLeft: left + 'px' }">
      <span class="f-menu-item-left-label f-flex-row f-flex-align-item-center">
        <slot name="label">{{ label }}</slot>
      </span>
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
      required: true,
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
    const menu = inject("menu", null);
    const group = inject("menu-group", null);

    const activeStatus = computed(() => {
      return menu.checkActive(props.id);
    });

    const itemClick = () => {
      if (props.id) {
        menu.activeItem(props.id);
      } else {
        console.error("ID没有设置，无法选中");
      }
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
      if (group) return group.data.left + 15;
      else return 15;
    });

    return {
      data,
      itemClick,
      active,
      unActive,
      left,
      activeStatus,
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