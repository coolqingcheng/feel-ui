# 模态框 f-Dialog  

弹出一个层，显示需要聚集焦点操作的内容

### 基本使用

<demo path="./DialogDemo1.vue"></demo>

### 嵌套打开子窗口

<demo path="./DialogDemo2.vue"></demo>

### 关闭确认

对话框组件如果需要关闭的时候做某个操作，操作完成后，再关闭。可以监听组件的**close-before** 事件

<demo path="./DialogDemo3.vue"></demo>

### 自定义头部

自定义表头 推荐使用span标签或者任意使用**display:inline-block**的标签

<demo path="./DialogDemo4.vue"></demo>

## 属性

| 名称         | 说明                            | 类型     | 可选值 | 默认值 |
| ------------ | ------------------------------- | -------- | ------ | ------ |
| title        | 表头标题                        | string   |        |        |
| show         | 是否显示对话框                  | bool     |        | false  |
| width        | 宽度。不设置，使用默认宽度750px | number   |        |        |
| close-before | 关闭调用本方法                  | Function |        |        |



## 事件

| 名称   | 说明                     | 返回值 |
| ------ | ------------------------ | ------ |
| closed | 对话框关闭，调用当前事件 |        |
|        |                          |        |
|        |                          |        |


