<template>
  <f-form ref="form" :rules="rules">
    <f-form-item label="用户名" for="username">
      <f-input></f-input>
    </f-form-item>
    <f-form-item label="密码" for="password">
      <f-input></f-input>
    </f-form-item>
    <f-form-item>
      <f-button text="登录"></f-button>
    </f-form-item>
  </f-form>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const rules = reactive({
      username: {
        type: "string",
        required: true,
        message: "用户名不能为空！",
      },
      password: {
        type: "string",
        required: true,
        message: "密码不能为空！",
      },
    });

    return {
      rules,
    };
  },
};
</script>

<style>
</style>