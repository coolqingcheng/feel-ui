<template>
  <f-row>
      <f-col>
          <f-circular :width="10" v-model="value"></f-circular>
      </f-col>
       <f-col>
          <f-circular :width="10" v-model="value" color="#ff7300"></f-circular>
      </f-col>
       <f-col>
          <f-circular :width="10" v-model="value" color="#f44336"></f-circular>
      </f-col>
  </f-row>
</template>

<script>
import { ref } from "vue";
export default {
setup() {
    const value = ref(75);

    return {
      value
    };
  },
}
</script>

<style>

</style>