<template>
  <f-tag
    :items="['标签1', {name:'标签2',type:'success'}, '标签3',{name:'标签4',type:'danger'},'标签5']"
    :edit="true"
  ></f-tag>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      list: [
        {
          name: "tag1",
        },
      ],
    });
  },
};
</script>

<style>
</style>