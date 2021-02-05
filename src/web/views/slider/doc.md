# slider 滑动条

### 简单使用

<demo path="./SliderDemo1.vue"></demo>

### 显示提示语

设置*showtip*为true，即可显示提示信息



<demo path="./SliderDemo2.vue" showtips></demo>

### 自定义提示语

**tipchange**属性可传递一个函数，自定义提示信息

<demo path="./SliderDemo3.vue" showtips></demo>

### 自定义起始值

使用*min*和*max*属性自定义起始值。使用*filter*属性可传递一个过滤方法。用于自定义处理滑动条的小数值

<demo path="./SliderDemo4.vue" showtips></demo>

> 滑动条越长，精度越高

### 自定义插槽

组件提供*header*和*footer*两个插槽。顾名思义，是分别放在头部和尾部。**自定义插槽内容最好固定宽度**

<demo path="./SliderDemo5.vue" showtips></demo>


### 范围选择


### 步长

## 禁用