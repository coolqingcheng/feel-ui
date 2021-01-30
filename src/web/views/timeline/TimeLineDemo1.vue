<template>
  <f-timeline>
    <f-timeline-item v-for="item in 10" :key="item">
      <template #title>
        <span>鸡汤时间线</span>
      </template>
      <template #body>
        <p>1.不为昨天烦恼，不为明天迷惘，只为今天更美好，别指望永远，永远最不可靠，很多时候，幸福转瞬即逝，变化无处不在。</p>
        <p>2.怀着一颗宽容的心去生活，再拥挤的世界也会变得无限宽广，再平凡的人生也会变得充满阳光。</p>
      </template>
    </f-timeline-item>
    <f-timeline-item :show-line="false">
      <template #title>
        今天的鸡汤就到这里了！
      </template>
    </f-timeline-item>
  </f-timeline>
</template>

<script>
export default {};
</script>

<style>
</style>