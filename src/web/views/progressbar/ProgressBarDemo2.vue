<template>
  <f-progress-bar v-model="data.value"></f-progress-bar>
  <br />
  <f-button text="增加进度" @click="add"></f-button>
  <f-button class="m-l-1" text="减少进度" @click="sub"></f-button>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      value: 0,
    });
    const add = () => {
      data.value += 5;
    };
    const sub = () => {
      data.value -= 5;
    };
    return {
      data,
      add,
      sub,
    };
  },
};
</script>

<style>
</style>