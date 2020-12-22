# 栅格

基于flex流式布局构建。用于支持响应式网页的开发。

栅格组件由*f-row*和*f-col*组成，它和bootstrap一样，是一个基于12列，5种屏幕尺寸的布局

- xs 小于等于600px的设备（手机等移动设备）
- sm 大于600px且小于等于960px的设备 （pad等设备）
- md 大于960px且小于等于1264px的设备 （低分辨率的笔记本电脑）
- lg 大于1264px且小于等于1904px的设备 （1086p的笔记本或者台式机显示器）
- xl 大于1904px的设备 （2k以上的高清大屏设备）

### 简单使用

在*f-col*组件上，可以设置**xs、sm、md、lg、xl**等属性用于设置当前列在不同屏幕上的显示占比，最小值为1，最大值为12。不设置就忽略该项。

> 调整浏览器大小查看响应式效果

<demo path="./LayoutDemo1.vue"></demo>

### 行内对齐方式

在*f-row*上设置**align** 用于设置*f-row*下的*f-col*的对齐，  **align**支持三个属性** left、center、right**


<demo path="./LayoutDemo2.vue"></demo>


### 列内对齐方式

在*f-col*上设置**align**，也可以调整*f-col*的对齐方式。与行内对齐方式的区别是，*f-col*默认的排版方式是从上到下。

<demo path="./LayoutDemo5.vue"></demo>


### 排序

*f-col*在*f-row*下支持排序，设置*f-col*的**order**属性，设置排序顺序。order数值越小排名越前。order默认值为1

<demo path="./LayoutDemo3.vue"></demo>

### 设置列间距

在*f-row*组件上，设置**gutter**属性，即可调整*f-row*下的所有*f-col*之间的间距，

> gutter属性设置值在gutter上会进行除2操作。如果设置的值为50，那么左右分别会设置25，上下也分别设置25

<demo path="./LayoutDemo4.vue"></demo>



# row属性

| 名称   | 说明     | 类型   | 可选值                 | 默认值 |
| ------ | -------- | ------ | ---------------------- | ------ |
| align  | 对齐方式 | string | start \| center \| end | left   |
| gutter | 间距     | number |                        | 10     |



# col属性

| 名称      | 说明                                      | 类型   | 可选值                 | 默认值 |
| --------- | ----------------------------------------- | ------ | ---------------------- | ------ |
| order     | 排序，越小排名越靠前                      | number |                        | 1      |
| col       | 栅格默认份数，一共12份                    | number |                        |        |
| xs        | 小于600px的设备的                         | number |                        |        |
| sm        | 大于960px且小于等于1264px的设备           | number |                        |        |
| md        | 大于960px且小于等于1264px的设备           | number |                        |        |
| lg        | 大于1264px且小于等于1904px的设备          | number |                        |        |
| xl        | 大于1904px的设备                          | number |                        |        |
| direction | 子组件的排列方向，支持横竖排序。h横向 v竖 | string | h\|v                   | h      |
| align     | 子组件对齐方式                            | string | start \| center \| end |        |
| justify   | 子组件对齐方式                            | string | start \| center \| end |        |

