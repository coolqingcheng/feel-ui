# 面包屑

位于顶部和内容之间的一个用于访问路径导航的组件

### 简单使用

设置*f-breadcrumb-item*的*path*属性。可跳转*vue-router*对应的路由。

<demo path="./BreadCrumbDemo1.vue"></demo>

### 自定义分隔符

自定义分隔符可以有两种方式。

1.设置*f-breadcrumb*的*separator*属性

<demo path="./BreadCrumbDemo2.vue"></demo>

2.如果要自定义图标。可使用*f-breadcrumb-item*组件提供的插槽实现自定义图标作为分隔符

<demo path="./BreadCrumbDemo3.vue"></demo>

# 属性

### f-breadcrumb

| 名称      | 说明   | 类型   | 可选值 | 默认值 |
| --------- | ------ | ------ | ------ | ------ |
| separator | 分隔符 | string |        | /      |

### f-breadcrumb-item

| 名称 | 说明                   | 类型   | 可选值 | 默认值 |
| ---- | ---------------------- | ------ | ------ | ------ |
| path | 路由跳转路径，默认为空 | string |        |        |

# 插槽

### f-breadcrumb-item

| 名称      | 说明         |
| --------- | ------------ |
| separator | 自定义分隔符 |

