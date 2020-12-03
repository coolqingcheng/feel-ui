<template>
  <f-row>
    <f-col :xs="12" :sm="6" :md="4" :lg="3" :xl="2" class="bg-gray1">
      <span class="span" v-for="item in 10" :key="item">{{ item }}</span>
    </f-col>
    <f-col
      :xs="12"
      :sm="6"
      :md="4"
      :lg="3"
      :xl="2"
      class="bg-gray2"
      direction="v"
    >
      <span class="span" v-for="item in 10" :key="item">{{ item }}</span>
    </f-col>
  </f-row>
</template>

<script>
export default {};
</script>

<style lang="less">
.span {
  display: inline-block;
  width: 30px;
}
.bg-gray1 {
  background: #f5f5f5;
  height: 250px;
}
.bg-gray2 {
  background: #ccc;
  height: 250px;
}
</style>