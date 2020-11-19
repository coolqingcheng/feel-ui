<template>
  <ul class="upload-preview">
    <li v-for="(item, i) in previews" :key="i">
      <img :src="item" :alt="item" />
    </li>
  </ul>
  <f-row>
    <f-col>
      <f-uploader
        ref="uploader3"
        :server="uploadServer"
        :auto="false"
        :preview="true"
        @upload-preview="previewEvent($event)"
        @upload-success="uploadSuccess($event)"
      >
        <f-button text="选择文件"></f-button>
      </f-uploader>
      <f-button text="手动上传" @click="hmUpload" class="m-l-2"></f-button>
      <f-line model="h"></f-line>
    </f-col>
  </f-row>
  <f-row>
    <f-col>
      <ul class="upload-preview">
        <li v-for="(item, i) in hmUploadList" :key="i">
          <img :src="item" :alt="item" />
        </li>
      </ul>
    </f-col>
  </f-row>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";
export default {
  setup() {
    const ctx = getCurrentInstance();
    const data = reactive({
      uploadServer: "http://localhost:8432/upload",
      allow: "jpg|gif|png",
      previews: [],
      hmUploadList: [],
    });
    const uploadError = (e) => {
      console.log(e);
    };
    const previewEvent = (e) => {
      data.previews.push(e.currentTarget.result);
    };
    /**
     * 手动上传
     */
    const hmUpload = () => {
      ctx.refs.uploader3.startUpload();
    };
    /**
     * 上传成功回调
     */
    const uploadSuccess = (e) => {
      //服务器响应 {"list":["http://localhost:8432/files/7692335611744012affa136d9c73d446.jpg"],"size":42375}
      // 如果服务器出错，应该响应非200状态码 ，上传组件会回调 upload-error 事件
      console.log(e);
      data.hmUploadList.push(e.list[0]);
      console.log(data.hmUploadList);
    };

    return {
      data,
      uploadError,
      uploadSuccess,
      hmUpload,
      previewEvent,
    };
  },
};
</script>

<style>
</style>