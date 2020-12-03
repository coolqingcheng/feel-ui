<template>
  <f-uploader :server="data.uploadServer" :allow="data.allow"
    ><f-button text="点击选择文件"></f-button>
  </f-uploader>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      uploadServer: "http://localhost:8432/upload",
      allow: "jpg|gif|png",
      previews: [],
      hmUploadList: [],
    });
    const uploadError = (e) => {
      console.log(e);
    };

    return {
      data,
      uploadError,
    };
  },
};
</script>

<style>
</style>