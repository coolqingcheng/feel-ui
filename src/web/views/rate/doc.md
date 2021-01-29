# Rate 评分条

评分组件

### 简单使用

<demo path="./RateDemo1.vue"></demo>


### 半选

<demo path="./RateDemo2.vue"></demo>


### 自定义图标或者文字

<demo path="./RateDemo3.vue"></demo>

### 调整大小

设置size属性，可以调整每个星的大小。默认size为24

<demo path="./RateDemo4.vue"></demo>


### 只读

设置readonly属性，组件处于只读状态，无法选择

<demo path="./RateDemo5.vue"></demo>

### 修改颜色

设置color属性，即可自定义选中颜色

<demo path="./RateDemo6.vue"></demo>

### 调整star个数

设置count属性，可自定义个数

<demo path="./RateDemo7.vue"></demo>

## 属性

| 名称     | 说明                          | 类型   | 可选值 | 默认值 |
| -------- | ----------------------------- | ------ | ------ | ------ |
| color    | 高亮颜色，支持css所有颜色格式 | string |        |        |
| count    | 选择项数量                    | number |        | 5      |
| size     | 大小                          | number |        | 24     |
| v-model  | 分数                          | number |        |        |
| half     | 是否支持半选                  | bool   |        | false  |
| readonly | 是否只读                      | bool   |        | false  |

