# 颜色选择器

一个支持多种多种格式的颜色选择组件
<div class="f-demo">
<div><button style="height:40px">c测试</button></div>
</div>

### 简单使用

<demo path="./ColorPickerDemo1.vue"></demo>

### 预置颜色

可以通过 **:colors** 属性设置一个数组，如 :color="["#ccc","#fff"...]" 。预置颜色栏，最多五个一行，建议最多两行预置颜色

<demo path="./ColorPickerDemo2.vue"></demo>

### 透明度支持

通过属性 **:alpha** 设置一个布尔值。true为开启透明模式，false为不开启，默认为关闭。

<demo path="./ColorPickerDemo3.vue"></demo>

> 透明度只支持颜色格式为rgb,也就是说只有在format为rgb的时候，设置alpha才会真的生效

## 属性

| 名称    | 说明                                      | 类型   | 可选值                     | 默认值 |
| ------- | ----------------------------------------- | ------ | -------------------------- | ------ |
| format  | 颜色格式                                  | string | "hex", "rgb", "hsv", "hsl" | hex    |
| alpha   | 透明度支持,rgb格式下有效                  | bool   |                            | false  |
| v-model | 绑定值为format格式的颜色值                |        |                            |        |
| colors  | 预置颜色，为一个数组，如:["#000", "#ccc"] | array  |                            |        |

