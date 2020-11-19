<template>
  <md></md>
</template>

<script>
import md from "./doc.md";
export default {
  components: {
    md,
  },
  data() {
    return {
      uploadServer: "http://localhost:8432/upload",
      allow: "jpg|gif|png",
      previews: [],
      hmUploadList: [],
      md: md,
    };
  },
};
</script>

<style lang="less">
.upload-preview {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>