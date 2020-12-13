# 圆形进度条

一个圆形的进度条，一般用于直观显示后台仪表盘中的服务器内存使用量，cpu负载。订单完成情况等数据

### 设置宽度

<demo path="./CircularDemo1.vue"></demo>

### 设置颜色

通过`color`属性设置进度条颜色

<demo path="./CircularDemo2.vue"></demo>

### 设置进度条圆角

设置`round`属性为`true`,可以开启圆角显示

<demo path="./CircularDemo3.vue"></demo>

### 设置中心显示内容

Circular组件提供了自定义插槽，可直接在组件中写入自定义的内容。

> 写入内容会默认居中显示

<demo path="./CircularDemo4.vue"></demo>



# 属性

| 名称    | 说明                     | 类型   | 可选值 | 默认值   |
| ------- | ------------------------ | ------ | ------ | -------- |
| v-model | 进度百分比，最小0最大100 | number |        | 0        |
| width   | 色条宽度                 | number |        | 5        |
| color   | 色条颜色                 | string |        | \#28a745 |
| round   | 是否显示圆角             | bool   |        | false    |

