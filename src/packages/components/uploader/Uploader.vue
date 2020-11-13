<template>
  <div>
    <div class="f-uploader-content">
      <div @click="testFileInput">
        <slot> 点击选择图片 </slot>
      </div>
      <input
        ref="selectFile"
        class="f-uploader-input"
        type="file"
        @change="changeFile"
        :multiple="multiple"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "f-uploader",
  props: {
    /**
     * 上传服务器地址
     */
    server: {
      type: String,
      required: true,
    },
    /**
     * 是否开启自动上传
     */
    auto: {
      type: Boolean,
      default: true,
    },
    /**
     * 允许文件 类型 用竖线分割 如jpg|png|gif ,如果全部允许，使用默认值即可
     */
    allow: {
      type: String,
      default: "*",
    },
    //是否开启预览事件
    preview: {
      type: Boolean,
      default: false,
    },
    /**
     * 允许最大上传文件大小，0为不限制
     */
    maxsize: {
      type: Number,
      default: 0,
    },
    /**
     * 是否允许多选
     */
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      src: "",
      files: [],
    };
  },
  methods: {
    changeFile(e) {
      let files = e.target.files;
      this.files = files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          console.log(file.name);
          //验证文件是否是允许文件类型
          if (this.allow != "*") {
            let arr = this.allow.split("|");
            let fileExtName = file.name.substring(
              file.name.lastIndexOf(".") + 1,
              file.name.length
            );
            console.log(fileExtName);
            console.log(arr);
            let index = arr.findIndex((a) => a == fileExtName);
            if (index == -1) {
              this.$emit("upload-error", {
                code: 0,
                msg: "当前文件[" + fileExtName + "]不允许上传",
              });
              return;
            }
          }

          //验证文件大小是否允许
          if (this.maxsize > 0) {
            if (file.size < this.maxsize) {
              this.$emit("upload-error", {
                code: 1,
                msg: `当前上传文件最大允许为${parseFloat(
                  this.maxsize / 1024 / 1024
                )}Mb`,
              });
            }
          }
        }
      }
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (this.preview) {
          var fileReader = new FileReader();
          fileReader.addEventListener(
            "load",
            (event) => {
              console.log(event);
              this.$emit("upload-preview", event);
            },
            false
          );
          fileReader.readAsDataURL(file);
        } else {
          this.uploadFile(file);
        }
      }
    },
    testFileInput() {
      this.$refs.selectFile.click();
    },
    uploadFile(file) {
      var form = new FormData();
      form.append("file", file);
      var xhr = new XMLHttpRequest();
      xhr.open("post", this.server);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var res = JSON.parse(xhr.responseText);
          this.src = res.list[0];
          this.$emit("upload-success", res);
        }
      };
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          var percent = (event.loaded / event.total) * 100;
          this.$emit("upload-progress", {
            value: percent,
          });
        }
      };
      xhr.onerror = (e) => {
        this.$emit("upload-error", {
          code: 3,
          msg: "上传文件错误",
          e: e,
        });
      };
      xhr.ontimeout = (e) => {
        this.$emit("upload-error", {
          code: 4,
          msg: "上传超时",
          e: e,
        });
      };
      xhr.send(form);
    },
    /**
     * 手动执行上传
     */
    startUpload() {
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        this.uploadFile(file);
      }
    },
  },
};
</script>

<style lang="less">
</style>