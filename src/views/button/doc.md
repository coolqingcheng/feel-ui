# 按钮 f-button

### 按钮颜色
<demo path="./ButtonDemo1.vue"></demo>
### 按钮大小设置

使用按钮的**mini**属性，让按钮显示为迷你模式 

<demo path="./ButtonDemo2.vue"></demo>

### 按钮加载状态
使用 **loading** 可以让按钮显示为loading状态 

<demo path="./ButtonDemo3.vue"></demo>

> loading状态无法点击，也不会触发点击事件 

### 按钮图标

按钮默认只显示文字,但是提供了自定义显示或者文字或者图标功能

<demo path="./ButtonDemo4.vue"></demo>

如果text属性为空的话，那么可以只显示图图标，不显示文字

<demo path="./ButtonDemo5.vue"></demo>


### 按钮组

> todo 暂未实现

# 属性

| 名称     | 说明             | 类型   | 可选值                                  | 默认值 |
| -------- | ---------------- | ------ | --------------------------------------- | ------ |
| type     | 按钮样式类型     | string | default\|info\|danger\|warning\|success | info   |
| text     | 文字描述         | string |                                         |        |
| loading  | 加载中           | bool   |                                         | false  |
| disabled | 是否禁用         | bool   |                                         | false  |
| mini     | 是否使用mini模式 | bool   |                                         | false  |

# 事件

f-button组件支持**所有标准的按钮事件**，比如点击，长按等。。

| 名称  | 说明     | 返回值 |
| ----- | -------- | ------ |
| click | 点击事件 |        |

