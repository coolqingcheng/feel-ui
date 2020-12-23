<template>
  <f-breadcrumb>
    <f-breadcrumb-item path="/button" v-for="item in data.list" :key="item">主页{{item}}</f-breadcrumb-item>
  </f-breadcrumb>
  <f-button @click="click" text="test"></f-button>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup(){
        const data = reactive({
            list:[1,2,3,4]
        })

        const click = ()=>{
            data.list.push(5)
        }
        return {
            data,
            click
        }
    }
};
</script>

<style>
</style>