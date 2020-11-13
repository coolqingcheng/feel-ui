# 进度条 f-progress-bar   

### 基本使用

<demo path="./ProgressBarDemo1.vue"></demo>

### 动态修改进度

<demo path="./ProgressBarDemo2.vue"></demo>

## 属性

| 名称      | 说明                                                     | 类型   | 可选值 | 默认值  |
| --------- | -------------------------------------------------------- | ------ | ------ | ------- |
| bg        | 进度条背景颜色 如 red , #ccc 支持各种background          | string |        |         |
| color     | 前景色，进度条进度颜色                                   | string |        | #000    |
| showLabel | 是否显示进度条后面的百分比文字                           | bool   |        | true    |
| size      | 进度条大小，支持三个值 medium\|small\|large              | string |        | meduium |
| v-model   | 绑定进度值，最大100，如果不是标准的100进度，需要自己计算 | number |        | 0       |



## 事件

| 名称     | 说明                  | 返回值         |
| -------- | --------------------- | -------------- |
| complete | 进度到达100的时候触发 | {value:进度值} |

