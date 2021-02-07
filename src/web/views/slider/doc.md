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

使用*min*和*max*属性自定义起始值。使用*filter*属性可传递一个过滤函数。用于自定义处理滑动条的小数值

<demo path="./SliderDemo4.vue" showtips></demo>

> 滑动条越长，精度越高

### 自定义插槽

组件提供*header*和*footer*两个插槽。顾名思义，是分别放在头部和尾部。**自定义插槽内容最好固定宽度**

<demo path="./SliderDemo5.vue" showtips></demo>


### 范围选择

设置range属性为true，v-model赋一个长度为2的数组 如:[0,10]

<demo path="./SliderDemo6.vue" showtips></demo>

如需要更精确的控制，需要使用*filter*属性传递一个函数来处理

<demo path="./SliderDemo7.vue" showtips></demo>

### 步长

设置*step*属性大于0，启用步长，step必须要能被 (max-min) 整除

<demo path="./SliderDemo8.vue" showtips></demo>

### 颜色

*color*属性可设置自定义颜色，支持所有web色

<demo path="./SliderDemo9.vue" showtips></demo>

### 禁用

设置*disabled*属性为true ，禁止组件拖动

<demo path="./SliderDemo10.vue" showtips></demo>

# 属性

| 名称      | 说明                                                    | 类型          | 可选值 | 默认值   |
| --------- | ------------------------------------------------------- | ------------- | ------ | -------- |
| v-model   | 双向绑定值                                              | number\|array |        | 0\|[0,0] |
| max       | 最大值                                                  | number        |        | 100      |
| min       | 最小值                                                  | number        |        | 0        |
| range     | 是否启用范围选择                                        | bool          |        | false    |
| step      | 步长，0不启用，大于1启用，step必须要能被 (max-min) 整除 | number        |        | 0        |
| color     | 自定义颜色                                              | string        |        |          |
| showstep  | 是否显示步长刻度                                        | bool          |        | false    |
| tipchange | 提示过滤函数                                            | function      |        |          |
| showtip   | 是否显示提示                                            | bool          |        | false    |
| filter    | 绑定值过滤                                              | function      |        |          |
| disabled  | 是否禁用                                                | bool          |        | false    |
|           |                                                         |               |        |          |

