# 图标 f-icon

feel-ui的默认图标使用的是[feathericons](https://feathericons.com/),当然也可以使用其他的svg图标。

### 使用说明

1. 如需要在项目中正常使用icon。需要从*node_modules*下的*feelui-vue/bin下拷贝icons目录到vue工程的 *public*文件夹中。

2. icon的默认加载路径是(http|https)://hostname/icons/feather/xxx.svg。

3. 设置*f-icon*组件的icon属性为内置svg图标名字。

    `<f-icon icon="chrome"></f-icon>`

3. 如果需要自定义图标，只需要在public/icon下新建一个文件夹。如 custom 。放置一个文件 test.svg。那么只需要在f-icon组件上设置type属性为文件夹名字。icon属性为svg图标名称。f-icon组件自动去目标目录加载svg图标并显示 

    `<f-icon icon="test" type="custom"></f-icon>`


### 内置svg图标如下

<demo path="./IconDemo1.vue" showcode="false"></demo>
