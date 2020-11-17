<template>
  <f-form ref="form" :rules="rules" :model="model">
    <f-form-item label="用户名" for="username">
      <f-input v-model="model.username"></f-input>
    </f-form-item>
    <f-form-item label="密码" for="password">
      <f-input v-model="model.password"></f-input>
    </f-form-item>
    <f-form-item label="分类" for="cate">
      <f-radio
        :data="['分类1', '分类2', '分类3', '分类4']"
        v-model="model.cate"
      ></f-radio>
    </f-form-item>
    <f-form-item label="支付方式" for="payway">
      <f-checkbox
        :data="['支付宝', '微信', '云闪付', '抖音']"
        v-model="model.payway"
      ></f-checkbox>
    </f-form-item>
    <f-form-item>
      <f-button text="登录" @click="valid()"></f-button>
      <f-button text="清空验证信息" @click="clear()" class="m-l-1"></f-button>
    </f-form-item>
  </f-form>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";
export default {
  setup() {
    const ctx = getCurrentInstance();
    const model = reactive({
      username: "",
      password: "",
      cate: "",
      payway: [],
      begin: "",
    });
    const rules = reactive({
      username: [
        {
          type: "string",
          required: true,
          message: "用户名不能为空！",
        },
        {
          type: "string",
          min: 5,
          max: 10,
          message: "长度5-10",
        },
      ],
      password: {
        type: "string",
        required: true,
        message: "密码不能为空！",
      },
      cate: {
        type: "string",
        required: true,
        message: "分类必须选择",
      },
      payway: {
        type: "array",
        required: true,
        message: "必须选择两种支付方式",
        validator: function (rule, value, callback) {
          return value.length >= 2;
        },
      },
    });

    const valid = async () => {
      try {
        let res = await ctx.refs.form.validate();
        console.log("验证通过");
      } catch (error) {
        console.error(error);
      }
    };

    const clear = () => {
      ctx.refs.form.clearValidate();
    };

    return {
      rules,
      model,
      valid,
      clear,
    };
  },
};
</script>

<style>
</style>