# 折叠面板 f-collapse

### 简单使用

折叠面板支持嵌套使用

<demo path="./CollapseDemo1.vue"></demo>

> *f-collapse-panel*必须指定id属性，且id必须唯一

### 默认展开

<demo path="./CollapseDemo2.vue"></demo>

### 同时展开多个

设置*f-collapse*的type等于1

<demo path="./CollapseDemo3.vue"></demo>

# collapse属性

| 名称   | 说明                                  | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------------- | ------ | ------ | ------ |
| type   | 折叠模式:0只能展开一个，1可以展开多个 | number |        | 0      |
| height | 折叠区域的高度                        | number |        | 200    |
| openid | 默认展开的项id                        | array  |        |        |

# collapse 事件

| 名称   | 说明           |
| ------ | -------------- |
| expand | 展开和折叠事件 |

# collapse-panel 属性

| 名称  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| id    | 唯一标识 | string |        |        |
| label | 表头说明 | string |        |        |

