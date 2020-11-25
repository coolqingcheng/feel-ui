<template>
  <div class="row">
    <div class="col">test1</div>
    <div class="col">test1</div>
    <div class="col">test1</div>
  </div>
  <div class="row">
    <div class="col">test1</div>
    <div class="col">test1</div>
    <div class="w-100"></div>
    <div class="col">test1</div>
    <div class="col">test1</div>
  </div>
  <div class="row">
    <div class="col col-6">test1</div>
    <div class="col col-6">test1</div>
    <div class="col col-1">col-1</div>
    <div class="col">test1</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.row {
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  .col {
    flex-grow: 1;
    flex-basis: 1;
  }

  .col-1 {
    flex-shrink: 0.1;
  }
  .col-6 {
    min-width: (60/100) * 100%;
  }
  .w-100 {
    width: 100%;
  }
}
</style>