<template>
  <div class="f-tags">
    <span class="f-tag-item" v-for="item in data.items" :key="item">
      {{ item }}<f-icon icon="x" @click="itemClose(item)" v-if="edit"></f-icon>
    </span>
    <span v-if="!data.status && edit" class="f-tag-plus" @click="addTag">
      <f-icon icon="plus"></f-icon>
    </span>
    <input
      @keydown.enter="enter"
      v-model="data.tagValue"
      v-if="data.status && edit"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, watch } from "vue";
import Input from "../input/Input.vue";

interface TagModel {
  status: boolean;
  tagValue: "";
  items: string[];
}

export default defineComponent({
  name: "f-tag",
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const data = reactive<TagModel>({
      status: false,
      tagValue: "",
      items: props.items,
    });
    const enter = () => {
      if (data.items.filter((a) => a == data.tagValue).length <= 0) {
        data.items.push(data.tagValue);
        data.tagValue = "";
      }
    };

    const addTag = () => {
      data.status = true;
    };

    const itemClose = (item: string) => {
      let i = data.items.indexOf(item);
      data.items.splice(i,1)
    };
    return {
      data,
      enter,
      addTag,
      itemClose,
    };
  },
});
</script>

<style>
</style>