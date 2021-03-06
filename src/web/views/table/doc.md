# 数据表格组件 f-table

简单配置即可实现展示多行数据表格，并提供排序，单选，复选，合计行等强大功能


### 简单表格


最基本的使用只需要设置header和data属性，header是表头字段设置，data是数据设置
<demo path="./TableDemo1.vue"></demo>



### 自定义显示数据

在header的属性中，加入slot: true,字段，即可开启当前字段自定义模板，f-table组件会通过v-slot把数据绑定到对应字段的模板上。可以在模板上自定义你喜欢的任何html标签，比如图片、按钮、彩色文本等

<demo path="./TableDemo2.vue"></demo>

### 表格单选

让header数组的第一项的type=radio即可开启表格单选功能

<demo path="./TableDemo3.vue"></demo>


### 表格多选


多选的用法和上边单选的用法完全一致，只需要把type改为checkbox，组件会自动启用多选功能

<demo path="./TableDemo4.vue"></demo>

> 多选和单选不可以在一个表格种同时出现



### 排序



在表头配置中，使用sort:true，即可启用当前字段排序


<demo path="./TableDemo5.vue"></demo>

> 因为绝大多数场景是通过服务器排序，组件本身不做排序操作。  
**f-table会触发sort事件，监听f-table的sort事件**，即可处理排序

### 表格为空

表格为空的时候，需要显示一个友好的提示。此功能自动启用，table的**data**属性为空或者length为0，自动会显示为空提示

<demo path="./TableDemo8.vue"></demo>


### 分页

可使用[f-pager](/#/pager)组件进行分页，组件可自定义，也可放在Table组件提供的**pager**插槽中，监听**f-pager**的**page-change**事件，修改表格数据即可完成分页

<demo path="./TableDemo6.vue"></demo>

### 合计行

合计行一般用于列统计。

<demo path="./TableDemo7.vue"></demo>

### 大数据量虚拟滚动

> todo




## 表头配置

| 名称     | 类型   | 说明                                                         | 必须 | 默认值 |
| -------- | ------ | ------------------------------------------------------------ | ---- | ------ |
| field    | string | 字段名称（区分大小写）                                       | 是   |        |
| title    | string | 表头显示值                                                   | 是   |        |
| width    | number | 宽度，不填写宽度由组件自动计算                               | 否   |        |
| sort     | bool   | 是否启用字段排序                                             | 否   | false  |
| slot     | bool   | 是否启用自定义渲染，如果启用，可以自定义当前字段显示样式     | 否   | false  |
| align    | string | 列显示位置，支持 **left**\|**center**\|**right**             | 否   | left   |
| type     | string | 使用本属性的列，必须放在第一列。目前支持 **checkbox**\|**radio** 两个值，分别为复选和单选 | 否   |        |
| 复杂表头 |        | 待支持                                                       |      |        |



## 属性

| 名称          | 说明                                                     | 类型   | 可选值 | 默认值 |
| ------------- | -------------------------------------------------------- | ------ | ------ | ------ |
| header        | 表头设置                                                 | array  |        |        |
| data          | 数据                                                     | array  |        |        |
| contentHeight | 内容最高高度，超过高度显示滚动条滚动，表头固定,0为不限制 | number |        | 0      |
| idkey         | 唯一键，如果启用单选或者多选，本属性是必须的             | string |        |        |

## 事件

| 名称 | 说明                                                         | 回调                            |
| ---- | ------------------------------------------------------------ | ------------------------------- |
| sort | 排序状态修改事件（组件本身不做排序操作，排序需要手动处理当前事件） | {field:'字段',sort:'desc\|asc'} |
|      |                                                              |                                 |
|      |                                                              |                                 |



## 方法

| 名称          | 说明                  | 返回值         |
| ------------- | --------------------- | -------------- |
| getCheckAll   | 获取所有复选框的idkey | array          |
| clearCheckAll | 清除所有的复选框选中  |                |
| getRadioValue | 获取单选框选中的值    | string\|number |
| clearRadio    | 清除单选选中状态      |                |

