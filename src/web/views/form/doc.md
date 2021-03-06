# 表单

表单可以使用输入框，单选，复选，日期选择，颜色选择，下拉框等多个控件组成。用以提交数据到服务器

<demo path="./FormDemo1.vue"></demo>

> 表单验证建议使用 async await 语法

## Form属性

| 名称       | 说明                                | 类型   | 默认值 |
| ---------- | ----------------------------------- | ------ | ------ |
| model      | 表单模型                            | Object |        |
| rules      | 验证规则                            | Object |        |
| labelWidth | 表单左侧文字宽度                    |        |        |
| direction  | 内部form-item的方向 h为横向 v为竖向 | string | h      |

## Form方法

| 名称          | 说明         | 返回值  |
| ------------- | ------------ | ------- |
| validate      | 验证表单     | Promise |
| reset         | 重置表单     |         |
| clearValidate | 清除验证状态 |         |

## Form-Item属性

| 名称      | 说明                                                         | 类型   | 默认值 |
| --------- | ------------------------------------------------------------ | ------ | ------ |
| for       | 对应表单字段的名称，必填                                     | string |        |
| label     | 标签文本                                                     | string |        |
| width     | 宽度，支持css属性中width支持的一切值                         | string | 100%   |
| direction | 描述文字和表单控件的对其方向，h为横向 v为竖向， 默认值为form的direction值 | string | h      |

