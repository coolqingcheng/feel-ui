<template>
  <div class="f-content">
    <md>
      <template v-slot:t1>
        <f-uploader
          :server="uploadServer"
          :allow="allow"
          @upload-error="uploadError($event)"
        >
        </f-uploader>
      </template>
      <template v-slot:t2>
        <f-uploader :server="uploadServer" :allow="allow"
          ><f-button text="点击选择文件"></f-button>
        </f-uploader>
      </template>
      <template v-slot:t3>
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
            <f-button
              text="手动上传"
              @click="hmUpload"
              class="m-l-2"
            ></f-button>
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
    </md>
  </div>
</template>

<script>
import md from "./doc.md";
export default {
  name: "uploader",
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
  methods: {
    uploadError(e) {
      this.$notify({
        title: "提示",
        content: e.msg,
        duration: 4500,
      });
    },
    previewEvent(e) {
      this.previews.push(e.currentTarget.result);
    },
    /**
     * 手动上传
     */
    hmUpload() {
      this.$refs.uploader3.startUpload();
    },
    /**
     * 上传成功回调
     */
    uploadSuccess(e) {
      //服务器响应 {"list":["http://localhost:8432/files/7692335611744012affa136d9c73d446.jpg"],"size":42375}
      // 如果服务器出错，应该响应非200状态码 ，上传组件会回调 upload-error 事件
      console.log(e);
      this.hmUploadList.push(e.list[0]);
      console.log(this.hmUploadList);
    },
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