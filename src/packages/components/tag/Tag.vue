<template>
  <div class="f-tags">
    <span
      class="f-tag-item"
      v-for="item in data.items"
      :key="item"
      :class="
        style == 'default'
          ? `f-tagtype-${item.type}`
          : `f-tagtype-fill-${item.type}`
      "
    >
      {{ item.name
      }}<f-icon
        icon="x"
        @click="itemClose(item)"
        v-if="edit"
        :width="18"
      ></f-icon>
    </span>
    <slot>
      <span v-if="!data.status && edit" class="f-tag-plus" @click="addTag">
        <f-icon icon="plus"></f-icon>
      </span>
      <input
        class="f-tag-input"
        @keydown.enter="enter"
        v-model="data.tagValue"
        v-if="data.status && edit"
        @blur="blur"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
} from "vue";
import Input from "../input/Input.vue";

interface TagModel {
  status: boolean;
  tagValue: "";
  items: { name: string; type: string }[];
}

export default defineComponent({
  name: "f-tag",
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    edit: {
      type: Boolean,
      default: false,
    },
    /**样式 default为默认样式 fill 为背景填充模式 */
    style: {
      type: String,
      default: "default",
      validator: (v: string) => ["default", "fill"].indexOf(v) > -1,
    },
  },
  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive<TagModel>({
      status: false,
      tagValue: "",
      items: [],
    });
    const enter = () => {
      if (
        pushTag({
          name: data.tagValue,
          type: "primary",
        })
      ) {
        ctx?.emit("append", { name: data.tagValue });
      }
    };

    const addTag = () => {
      data.status = true;
    };

    watch(
      () => props.modelValue,
      () => {
        init();
      }
    );

    const init = () => {
      props.modelValue.forEach((item: any) => {
        if (typeof item == "string") {
          pushTag({
            name: item,
            type: "primary",
          });
        }
        if (typeof item == "object") {
          if (!item.name || !item.type) {
            console.error("tag->item为object的时候，必须包含name和type属性");
          } else {
            pushTag({
              name: item.name,
              type: item.type,
            });
          }
        }
      });
    };

    const pushTag = (item: { name: string; type: string }) => {
      if (data.items.findIndex((a) => a.name == item.name) == -1) {
        data.items.push({
          name: item.name,
          type: item.type,
        });
        data.tagValue = "";
        return true;
      }
      return false;
    };
    onMounted(() => {
      init();
    });

    const itemClose = (item: string | { name: string; type: string }) => {
      if (typeof item == "string") {
        let i = data.items.findIndex((a) => a.name == item);
        data.items.splice(i, 1);
        ctx?.emit("delete", { name: item });
      }
      if (typeof item == "object") {
        let i = data.items.findIndex((a) => a.name == item.name);
        data.items.splice(i, 1);
        ctx?.emit("delete", { name: item.name });
      }
      ctx?.emit("update:modelValue", data.items);
    };

    const blur = () => {
      data.status = false;
    };

    return {
      data,
      enter,
      addTag,
      itemClose,
      blur,
    };
  },
});
</script>

<style>
</style>