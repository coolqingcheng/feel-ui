<template>
  <form class="f-form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import mitt from "mitt";
import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  watch,
} from "vue";
import Schema from "async-validator";
import { FieldErrorList, ErrorList, ValidateError } from "async-validator";

import { deepClone } from "@/packages/utils/feelutils";

import { FormInject, formInjectKey, FormData, ValidField } from "./formOption";

export default {
  name: "f-form",
  props: {
    // 表单模型
    model: {
      type: Object,
      required: true,
      default: () => {},
    },
    //验证规则
    rules: {
      type: Object,
      required: true,
      default: () => {},
    },
    labelWidth: {
      type: Number,
      default: 80,
    },
    direction: {
      type: String,
      default: "h",
      validator: (v: string) => {
        return ["h", "v"].indexOf(v) > -1;
      },
    },
  },

  setup(props) {
    const ctx = getCurrentInstance();
    const data = reactive<FormData>({
      labelWidth: props.labelWidth,
      model: props.model,
    });

    const validtionMessages = reactive<ValidField[]>([]);
    const event = mitt();
    const fieldValid = (field: string) => {
      return validtionMessages.filter((a) => a.field == field);
    };
    /**
     * 验证单个值
     */
    const validateItem = async (field: string) => {
      let rule = props.rules[field];
      let schema = {};
      schema[field] = rule;
      let model = {};
      model[field] = props.model[field];

      const validator = new Schema(schema);
      try {
        let res = await validator.validate(model);
        //移除当前验证信息
        let messages = validtionMessages.filter((a) => a.field == field);
        messages.map((item) => {
          let i = validtionMessages.findIndex((a) => a.field == field);
          validtionMessages.splice(i, 1);
        });
      } catch (err) {
        let error = <{ errors: ErrorList; fields: FieldErrorList }>err;
        for (const key in error.fields) {
          let item = <ValidateError[]>error.fields[key];
          item.map((i) => {
            validtionMessages.push({
              message: i.message,
              field: i.field,
            });
          });
        }
      }
    };
    provide<FormInject>(formInjectKey, {
      data: data,
      rules: props.rules,
      fieldValid: fieldValid,
      validateItem: validateItem,
      direction: props.direction,
    });
    const submit = () => {
      ctx?.emit("submit", { event: "submit" });
    };

    onUnmounted(() => {
      event.all.clear();
    });

    let modelClone = {};

    onMounted(() => {
      modelClone = deepClone(data.model);
    });

    watch(
      () => props.model,
      () => {
        data.model = props.model;
      }
    );

    const validate = () => {
      return new Promise((resolve, reject) => {
        const validator = new Schema(props.rules);
        validator
          .validate(data.model)
          .then((res) => {
            validtionMessages.splice(0, validtionMessages.length);
            resolve({
              valid: true,
              field: res,
            });
          })
          .catch((err: { errors: ErrorList; fields: FieldErrorList }) => {
            validtionMessages.splice(0, validtionMessages.length);
            for (const key in err.fields) {
              let item = <ValidateError[]>err.fields[key];
              item.map((i) => {
                validtionMessages.push({
                  message: i.message,
                  field: i.field,
                });
              });
            }

            reject({
              valid: false,
              fields: err.fields,
            });
          });
      });
    };

    /**
     * 重置表单
     */
    const reset = () => {
      let model = deepClone(modelClone);
      for (const key in model) {
        if (Object.prototype.hasOwnProperty.call(model, key)) {
          data.model[key] = model[key];
        }
      }
    };

    /**
     * 清空表单验证信息
     */
    const clearValidate = () => {
      validtionMessages.splice(0, validtionMessages.length);
    };

    return {
      event,
      submit,
      validate,
      clearValidate,
      reset,
    };
  },
};
</script>

<style>
</style>