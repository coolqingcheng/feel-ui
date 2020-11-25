# 栅格

基于flex流式布局构建。用于支持响应式网页的开发。

栅格组件由*f-row*和*f-col*组成，它和bootstrap一样，是一个基于12列，5种屏幕尺寸的布局

- xs 小于等于600px的设备（手机等移动设备）
- sm 小于600px且小于等于960px的设备 （pad等设备）
- md 大于960px且小于等于1264px的设备 （低分辨率的笔记本电脑）
- lg 大于126px且小于等于1904px的设备 （1086p的笔记本或者台式机显示器）
- xl 大于1904px的设备 （2k以上的高清大屏设备）

### 简单使用

在*f-col*组件上，可以设置**xs、sm、md、lg、xl**等属性用于设置当前列在不同屏幕上的显示占比，最小值为1，最大值为12。不设置就忽略该项

<demo path="./LayoutDemo1.vue"></demo>

### 对齐方式

对齐方式分为两种:

1. 在*f-row*上设置**align** 用于设置*f-row*下的*f-col*的对其方式  **align**支持三个属性** left、center、right**

<demo path="./LayoutDemo2.vue"></demo>