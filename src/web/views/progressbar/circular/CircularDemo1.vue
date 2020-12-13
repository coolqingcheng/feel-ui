<template>
  <f-row>
      <f-col>
          <f-circular :width="5" v-model="value">
          </f-circular>
      </f-col>
       <f-col>
          <f-circular :width="8" v-model="value"></f-circular>
      </f-col>
       <f-col>
          <f-circular :width="14" v-model="value"></f-circular>
      </f-col>
  </f-row>
  <br />
  <f-button text="-" @click="opera(false)"></f-button>
  <f-button text="+" @click="opera(true)" class="m-l-2"></f-button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(90);
    const opera = (status) => {
      if (status) value.value += 1;
      else value.value -= 1;
    };
    return {
      value,
      opera,
    };
  },
};
</script>

<style>
</style>