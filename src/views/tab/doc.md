# 选项卡 f-tab

### 简单使用

<demo path="./TabDemo1.vue"></demo>

### 关闭选项卡

设置*show-close*属性为true，即可开启选项卡关闭功能，监听*close*事件即可知道用户关闭的是哪个选项卡

<demo path="./TabDemo2.vue"></demo>

### 设置选项卡风格

选项卡支持*card*和*simple*两种风格

<demo path="./TabDemo3.vue"></demo>



# Tab属性

| 名称       | 说明                      | 类型   | 默认值 |
| ---------- | ------------------------- | ------ | ------ |
| active     | 激活的选项卡名称          | string |        |
| type       | 选项卡风格 card \| simple | string | card   |
| show-close | 选项卡是否支持关闭        | bool   | false  |

# Tab事件

| 名称   | 说明                   | 返回值               |
| ------ | ---------------------- | -------------------- |
| close  | 关闭选项卡后，触发事件 | {title:'选项卡名称'} |
| change | 切换选项卡后，触发     | {title:'选项卡名称'} |

---

# Tab-Item 属性

| 名称  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| title | 选项卡名称 | string |        |

