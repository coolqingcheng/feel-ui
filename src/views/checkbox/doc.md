# 复选框
一组选择项中选中一项或多项

### 基础使用
<slot name="t1"></slot>
``` javascript
<template>
  <f-checkbox :data="data"></f-checkbox>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付", "paypal"],
    };
  },
};
</script>
```

### 默认选中
<slot name="t2"></slot>
``` javascript
<template>
  <f-checkbox :data="data" v-model="value"></f-checkbox>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付", "paypal"],
      value: ["支付宝", "微信"],
    };
  },
};
</script>
```

### 禁用部分选择项

<slot name="t3"></slot>

``` javascript
<template>
  <f-checkbox :data="data" v-model="value" :disables="disables"></f-checkbox>
</template>

<script>
export default {
  data() {
    return {
      data: ["支付宝", "微信", "云闪付", "paypal"],
      value: ["支付宝", "云闪付"],
      disables: ["微信"],
    };
  },
};
</script>

```

# 属性

| 名称     | 说明                                          | 类型  | 可选值 | 默认值 |
| -------- | --------------------------------------------- | ----- | ------ | ------ |
| data     | 选择项列表,传递一个数组，如:['支付宝','微信'] | array |        |        |
| disables | 禁用项目，禁用一个或者多个选择项              | array |        |        |

# 事件

| 名称   | 说明                             | 返回值         |
| ------ | -------------------------------- | -------------- |
| select | 选中某个项的时候，会触发当前事件 | {value:返回值} |

