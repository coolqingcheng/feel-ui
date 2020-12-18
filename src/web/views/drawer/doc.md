# 抽屉

一个可以从上下左右方向弹出一个浮层的组件

### 简单使用

<demo path="./DrawerDemo1.vue"></demo>

### 嵌套抽屉

在某些场景中，需要在一个抽屉中，打开另一个抽屉。

<demo path="./DrawerDemo2.vue"></demo>



# 属性

| 名称        | 说明                                  | 类型   | 可选值                   | 默认值 |
| ----------- | ------------------------------------- | ------ | ------------------------ | ------ |
| direction   | 打开位置                              | string | left\|top\|right\|bottom | right  |
| show-header | 是否显示默认头部                      | bool   |                          | true   |
| show-footer | 是否显示默认底部                      | bool   |                          | true   |
| width       | 宽度像素，位置为left和right的时候有效 | number |                          | 250    |
| height      | 高度像素，位置为top和bottom的时候有效 | number |                          | 250    |
| v-model     | 双向绑定值，是否打开抽屉              | bool   |                          | false  |

# 事件

| 名称  | 说明         | 返回值 |
| ----- | ------------ | ------ |
| close | 抽屉关闭事件 |        |
| open  | 抽屉打开事件 |        |

# 插槽

| 名称    | 说明               |      |
| ------- | ------------------ | ---- |
| header  | 头部区域           |      |
| default | 默认的中间内容区域 |      |
| footer  | 底部的区域         |      |

