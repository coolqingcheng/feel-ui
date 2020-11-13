# 下拉框 f-select


### 基本使用

<demo path="./SelectDemo1.vue" ></demo>

### 搜索选择项

设置search为true，使下拉框开启搜索功能

<demo path="./SelectDemo2.vue"></demo>

## 属性

| 名称   | 说明                                                         | 类型   | 可选值 | 默认值 |
| ------ | ------------------------------------------------------------ | ------ | ------ | ------ |
| data   | 下拉框的选择项集合,例:{key:k,value:v}<br/>key为隐藏值。value为下拉列表显示值 | array  |        |        |
| search | 是否开启搜索                                                 | bool   |        | false  |
| hint   | 提示语，没有选中任何项的时候的提示语                         | string |        | 请选择 |



## 事件

| 名称      | 说明        | 返回值          |
| --------- | ----------- | --------------- |
| show      | 下拉框打开  | {status:status} |
| close     | 下拉框关闭  | {status:status} |
| itemClick | 列表项点击, | {data:{}}       |

