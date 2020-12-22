<template>
  <f-row>
    <f-col
      v-for="item in data.list"
      :key="item"
      :xs="6"
      :sm="6"
      :md="4"
      :lg="2"
      :xl="2"
      direction="v"
      justify="center"
      align="center"
      class="m-t-3 f-hover-shadow"
    >
      <div class="f-center f-align-center f-flex-col p-2 " style="height: 80px">
        <f-icon :icon="item" width="25"></f-icon>
        <span>{{ item }}</span>
      </div>
    </f-col>
  </f-row>
</template>

<script>
import { reactive, toRefs } from "vue";
import json from "./feather.json";
export default {
  setup() {
    var list = json.list;
    const data = reactive({
      list: list,
    });
    console.log(data.list);
    return {
      data,
    };
  },
};
</script>

<style>
</style>