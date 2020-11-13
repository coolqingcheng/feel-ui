# 树控件  f-tree

### 基本使用

<slot name="t1"></slot>

``` javascript
<template>
  <f-tree :data="data.data"></f-tree>
  <br />
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    const data = reactive({
      data: [],
    });
    data.data = [
      {
        label: "四川省",
        expand: true,
        children: [
          {
            label: "成都市",
          },
          {
            label: "绵阳市",
            children: [
              {
                label: "安州区",
              },
              {
                label: "游仙区",
              },
            ],
          },
          {
            label: "南充市",
            children: [
              {
                label: "嘉陵区",
              },
            ],
          },
        ],
      },
      {
        label: "重庆市",
        children: [
          {
            label: "万州区",
          },
          {
            label: "江北区",
          },
        ],
      },
    ];

    return {
      data,
    };
  },
};
</script>
```

### 默认选中

需要默认选中某项，只需要设置当前界面的checked为true，然后组件会自动渲染选中状态

<slot name="t2"></slot>

> 如果需要选中父节点，只需要设置选中全部子节点。单独设置选中父节点，但是未选中子子节点，节点选择框是未选中状态

``` javascript
<template>
  <f-tree :tree="data.data"></f-tree>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    const data = reactive({
      data: [],
    });
    data.data = [
      {
        label: "四川省",
        expand: true,
        children: [
          {
            label: "成都市",
          },
          {
            label: "绵阳市",
            children: [
              {
                label: "安州区",
                checked: true,
              },
              {
                label: "游仙区",
              },
            ],
          },
          {
            label: "南充市",
            children: [
              {
                label: "嘉陵区",
              },
            ],
          },
        ],
      },
      {
        label: "重庆市",
        children: [
          {
            label: "万州区",
          },
          {
            label: "江北区",
          },
        ],
      },
    ];

    return {
      data,
    };
  },
};
</script>
```



### 树节点点击事件和选中事件

需要监听文字点击事件，监听node-click事件，需要监听节点选择框的选中或者取消选中事件监听node-check事件
<slot name="t3"></slot>



### 不显示选中
设置组件的 ***show-check*** 属性为false，即可隐藏组件节点前的选择框
<slot name="t4"></slot>
``` javascript
<template>
  <f-tree :tree="data.data" :show-check="false"></f-tree>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      data: [],
      nodeClickLabel: "",
      nodeCheckLabel: "",
    });
    data.data = [
      {
        label: "四川省",
        expand: true,
        children: [
          {
            label: "成都市",
          },
          {
            label: "绵阳市",
            children: [
              {
                label: "安州区",
              },
              {
                label: "游仙区",
              },
            ],
          },
          {
            label: "南充市",
            children: [
              {
                label: "嘉陵区",
              },
            ],
          },
        ],
      },
      {
        label: "重庆市",
        children: [
          {
            label: "万州区",
          },
          {
            label: "江北区",
          },
        ],
      },
    ];
    return {
      data,
    };
  },
};
</script>
```
## 属性

| 名称       | 说明                                                         | 类型  | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ----- | ------ | ------ |
| tree       | 组件数据源，类型为一个数组 支持属性<br/>label : 显示名称<br/>children:子节点<br/>checked:是否选中 <br/>expand:是否展开 | array |        |        |
| show-check | 是否显示节点前的选择框                                       | bool  |        | true   |



## 事件

| 名称       | 说明                       | 返回值 |
| ---------- | -------------------------- | ------ |
| node-click | 节点文字点击               |        |
| node-check | 节点选择框选中或者取消选中 |        |
|            |                            |        |

