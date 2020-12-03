# 分页组件

<demo path="./PageDemo1.vue"></demo>

## 属性

| 名称  | 说明         | 类型   | 可选值 | 默认值     |
| ----- | ------------ | ------ | ------ | ---------- |
| count | 总条数       | number |        |            |
| index | 当前页码     | number |        | 1          |
| size  | 页大小       | number |        | 10         |
| limit | 页大小选择项 | array  |        | [10,20,50] |



## 事件

| 名称        | 说明       | 返回值                   |
| ----------- | ---------- | ------------------------ |
| page-change | 页大小修改 | {size:页大小,index:页码} |
