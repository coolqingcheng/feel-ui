<template>
  <div class="f-tags">
    <span class="f-tag-item" v-for="item in data" :key="item">
      {{ item }}
    </span>
    <input @keydown.enter="enter" v-model="tagValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "../input/Input.vue";

export default defineComponent({
  name: "f-tag",
  props: {
    data: {
      type: Array,
      required: true,
    },
    edit: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const status = ref(true);
    const tagValue = ref('')


    const enter = () => {
      console.log(tagValue.value);
      
    };
    return {
      status,
      enter,
      tagValue
    };
  },
});
</script>

<style>
</style>