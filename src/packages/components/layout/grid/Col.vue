<template>
  <div
    :class="['f-col',grid.sm?`f-col-sm-${grid.sm}`:'',grid.md?`f-col-md-${grid.md}`:'',grid.lg?`f-col-lg-${grid.lg}`:'',grid.xl?`f-col-xl-${grid.xl}`:'']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-col",
  props: {
    grid: {
      type: Object,
      default: () => {
        return {
          sm: 0, //>=540px
          md: 0, //>=720px
          lg: 0, //>=960px
          xl: 0, //>=1200px
        };
      },
    },
  },
};
</script>

<style>
</style>