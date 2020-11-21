<template>
  <div class="f-tab">
    <div class="f-tab-header">
      <ul ref="header" :style="{ flexWrap: data.more ? 'wrap' : 'nowrap' }">
        <li
          v-for="(item, i) in data.titles"
          :key="i"
          @click="headerClick(item)"
          :class="[item == data.selectTitle ? 'active' : '']"
        >
          {{ item }}
        </li>
      </ul>
      <div class="f-tab-header-more" @click="moreClick(false)">
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
interface DataModel {
  titles: Array<string>;
  selectTitle: string;
  more: boolean;
}
import cdk from "../../utils/cdk";
import { provide, reactive, ref } from "vue";
export default {
  name: "f-tab",
  props: {
    active: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const data = reactive<DataModel>({
      titles: [],
      selectTitle: props.active,
      more: false,
    });

    const register = (title) => {
      let index = data.titles.findIndex((a) => a == title);
      if (index == -1) {
        data.titles.push(title);
      }
      data.selectTitle = title;
    };
    const headerClick = (title) => {
      data.selectTitle = title;
      console.log(data.selectTitle);
    };

    provide("tab", {
      register: register,
      headerClick: headerClick,
      data: data,
    });

    const header = ref<Element>();
    const updateMoreStatus = () => {};

    const moreClick = () => {
      data.more = !data.more;
    };
    return {
      data,
      headerClick,
      header,
      updateMoreStatus,
      moreClick,
    };
  },
};
</script>

<style>
</style>