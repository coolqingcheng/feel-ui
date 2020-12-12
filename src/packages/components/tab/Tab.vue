<template>
  <div class="f-tab" ref="container" :class="type">
    <div class="f-tab-header">
      <ul
        ref="header"
        :style="{ flexWrap: data.more ? 'wrap' : 'nowrap' }"
        :class="[data.showMore ? 'f-tab-hidden' : '']"
      >
        <li
          v-for="(item, i) in data.titles"
          :key="i"
          @click="headerClick(item)"
          :class="[
            item == data.selectTitle && data.more == false ? 'active' : '',
            data.more && item == data.selectTitle ? 'active-more' : '',
          ]"
        >
          <span>
            {{ item }}
          </span>
          <f-icon icon="x" @click.stop="close(item)" v-if="showClose" class="icon-close"></f-icon>
        </li>
      </ul>
      <div
        class="f-tab-header-more"
        @click="moreClick(false)"
        v-if="data.showMore"
      >
        <span
          class="f-icon icon-left"
          :style="{ transform: data.more ? 'rotate(-90deg)' : 'rotate(90deg)' }"
        ></span>
      </div>
    </div>
    <div ref="tabcontent" class="f-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export interface DataModel {
  titles: Array<string>;
  selectTitle: string;
  more: boolean;
  showMore: boolean;
}

export interface TabInject {
  register: (title: string) => void;
  headerClick: (title: string) => void;
  data: DataModel;
}
import cdk from "../../utils/cdk";

import Icon from "../icon/Icon.vue"
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  provide,
  reactive,
  ref,
} from "vue";

export default defineComponent({
  name: "f-tab",
  components:{
    "f-icon":Icon
  },
  props: {
    active: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "card",
      validator: (v: string) => {
        return ["card", "simple"].indexOf(v) > -1;
      },
    },
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive<DataModel>({
      titles: [],
      selectTitle: props.active,
      more: false,
      showMore: false,
    });

    const register = (title: string) => {
      if (!title) return;
      let index = data.titles.findIndex((a) => a == title);
      if (index == -1) {
        data.titles.push(title);
      }
      data.selectTitle = title;
    };
    const headerClick = (title) => {
      data.selectTitle = title;
      data.more = false;
      ctx?.emit("change", { title: data.selectTitle });
    };
    onMounted(() => {
      setTimeout(() => {
        updateMoreStatus();
      }, 10);
      if (!props.active && data.titles.length > 0) {
        data.selectTitle = data.titles[0];
      }
    });

    const close = (item: string) => {
      let i = data.titles.indexOf(item);
      if (i > -1) {
        data.titles.splice(i, 1);
        //如果删除的是选中的，那么默认重新选中一个
        if (item == data.selectTitle) {
          if (data.titles.length > 0) {
            data.selectTitle = data.titles[0];
          }
        }
      }
      if (data.titles.length == 0) {
        data.selectTitle = "";
      }
      ctx?.emit("close", {
        title: item,
      });
    };

    provide<TabInject>("tab", {
      register: register,
      headerClick: headerClick,
      data: data,
    });

    const header = ref<HTMLElement>();
    const container = ref<HTMLElement>();
    const updateMoreStatus = () => {
      if (header.value && container.value)
        if (header.value?.scrollWidth > container.value?.offsetWidth) {
          data.showMore = true;
        } else {
          data.showMore = false;
        }
      // console.log(
      //   `header:${header.value?.scrollWidth} container:${container.value?.offsetWidth}`
      // );
    };
    cdk.windowOnResize(() => {
      updateMoreStatus();
      data.more = false;
    });
    const moreClick = () => {
      data.more = !data.more;
    };
    return {
      data,
      headerClick,
      header,
      updateMoreStatus,
      moreClick,
      container,
      close,
    };
  },
});
</script>

<style>
</style>