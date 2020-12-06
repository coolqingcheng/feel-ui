<template>
  <div class="demo1" v-loading="status" loading-text="加载中...">
      <a>baidu</a>
  </div>
  <br/>
  <f-switch v-model="status"></f-switch>
  <span>{{status}}</span>
</template>

<script>
import { onUnmounted, ref } from 'vue'
export default {
    setup(){
        const status = ref(true)
        onUnmounted(()=>{
            console.log('组件注销');
        })
        return {
            status
        }
    }
}
</script>

<style lang="less" scoped>
.demo1{
width: 100px;
height: 100px;
background: #ccc;
}
</style>