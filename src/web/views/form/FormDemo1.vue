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
    <f-form-item label="开始时间" for="begin">
      <f-date v-model="model.begin"></f-date>
    </f-form-item>
    <f-form-item label="爱好" for="hobby">
      <f-select
        :data="[
          { key: 1, value: '吃饭' },
          { key: 2, value: '睡觉' },
          { key: 3, value: '打豆豆' },
        ]"
        v-model="model.hobby"
      ></f-select>
    </f-form-item>
    <f-form-item label="开关" for="status">
      <f-switch v-model="model.status"></f-switch>
    </f-form-item>
    <f-form-item>
      <f-button text="登录" @click="valid()"></f-button>
      <f-button text="重置" @click="reset()" class="m-l-1"></f-button>
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
      hobby: "",
      status: false,
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
        validator: (rule, value, callback) => {
          return value.length >= 2;
        },
      },
      begin: {
        type: "date",
        required: true,
        message: "开始时间不能为空",
      },
      hobby: {
        type: "number",
        required: true,
        message: "爱好必须选择",
      },
      status: {
        type: "bool",
        message: "开关必须打开",
        validator: (rule, v) => v == true,
      },
    });

    const valid = async () => {
      try {
        console.log(model);
        let res = await ctx.refs.form.validate();
        console.log("验证通过");
      } catch (error) {
        console.error(error);
      }
    };

    const clear = () => {
      ctx.refs.form.clearValidate();
    };

    const reset = () => {
      ctx.refs.form.reset();
    };

    return {
      rules,
      model,
      valid,
      clear,
      reset,
    };
  },
};
</script>

<style>
</style>