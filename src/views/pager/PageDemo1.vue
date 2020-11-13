<template>
  <f-pager :count="150" @page-change="pageChange"></f-pager>
</template>

<script>
export default {
  setup() {
    const pageChange = (e) => {
      console.log(`size:${e.size} index:${e.index}`);
    };
    return {
      pageChange,
    };
  },
};
</script>

<style>
</style>