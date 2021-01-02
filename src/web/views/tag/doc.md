# 标签

### 简单使用

标签支持 success primary default danger warning info dark 默认色彩

<demo path="./TagDemo1.vue"></demo>

### 只读模式

*edit*属性为false的时候，标签组件进入只读模式,添加按钮会隐藏

<demo path="./TagDemo2.vue"></demo>

### 样式

标签组件支持2种样式。*fill*和*default*，fill背景和边框为同一种颜色，default背景为默认色，边框为设置的颜色

<demo path="./TagDemo3.vue"></demo>

# 属性 

| 名称  | 说明                | 类型                            | 可选值        | 默认值  |
| ----- | ------------------- | ------------------------------- | ------------- | ------- |
| items | 数据源,支持两种格式 | ['string']\|[{name:'',type:''}] |               |         |
| edit  | 是否是可编辑        | bool                            |               | false   |
| style | 样式                | string                          | fill\|default | default |

# 事件

| 名称   | 说明                         | 响应值    |
| ------ | ---------------------------- | --------- |
| delete | 删除标签的时候，触发当前事件 | {name:''} |
| append | 添加标签的时候，触发当前事件 | {name:''} |
|        |                              |           |

