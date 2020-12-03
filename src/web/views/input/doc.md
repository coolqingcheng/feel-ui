# 输入框
提供输入文本,密码框，长文本框等功能
### 文本输入框

<demo path="./InputDemo1.vue"></demo>

### 文本框提示

<demo path="./InputDemo2.vue"></demo>

### 密码框

<demo path="./InputDemo3.vue"></demo>

### 长文本输入框

<demo path="./InputDemo4.vue"></demo>

### 双向绑定

<demo path="./InputDemo5.vue"></demo>


# 属性

| 名称     | 说明                                         | 类型   | 可选值                                                       | 默认值 |
| -------- | -------------------------------------------- | ------ | ------------------------------------------------------------ | ------ |
| type     | 输入框类型                                   | string | 支持html中input标签所有的type类型<br/>如果type=textarea，那么渲染长文本输入框 | text   |
| hint     | 输入框未输入内容时的提示语                   | string |                                                              |        |
| disabled | 是否禁用输入框                               | bool   |                                                              | false  |
| row      | 输入框行数,type为textarea的时候，row参数生效 | number |                                                              | 6      |



# 事件

| 名称   | 说明                         | 返回值 |
| ------ | ---------------------------- | ------ |
| blur   | 输入框失去焦点               |        |
| focus  | 输入框获取焦点               |        |
| click  | 输入框点击                   |        |
| change | 输入框失去焦点的时候才会触发 |        |
| input  | 输入值修改时候触发           |        |

