# ToolTip 文字提示

使用*f-tooltip*组件包裹需要触发提示的组件。并且使用被包裹的*v-on*属性绑定#trigger插槽传递的参数。即可触发文字提示。

> 支持两种触发模式，hover和click。hover指鼠标悬浮到被包裹组件上，即显示提示文字。click需要点击触发。
> 提示文字支持left top bottom right四个方向显示

<demo path="./ToolTipsDemo1.vue"></demo>

# 属性

| 名称      | 说明     | 类型   | 可选值                   | 默认值 |
| --------- | -------- | ------ | ------------------------ | ------ |
| trigger   | 触发方式 | string | hover\|click             | hover  |
| direction | 方向     | string | left\|right\|top\|bottom | top    |
| msg       | 提示信息 | string |                          | null   |

