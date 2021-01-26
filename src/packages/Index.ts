import button from './components/button/index'

import Layout from './components/layout/index'

import Input from './components/input/index'

import Number from "./components/number/Index"

import Radio from './components/radio/index'

import CheckBox from './components/checkbox/index'

import Switch from './components/switch/index'

import Text from "./components/text/Index"

import Collapse from './components/collapse/index'
//下拉框
import Select from './components/select/index'
//时间选择
import DateTimePicker from './components/datepicker/index'

//动画
import Anim from "./components/anim/index"

import Form from './components/form/index'

//tab
import Tab from './components/tab/index'

//进度条

import ProgressBar from './components/progressbar/index'

import Icon from './components/icon/index'

import Tree from './components/tree/index'

import Menu from "./components/menu/index"

import Tag from "./components/tag/index"

//通知

import NotifyBox from "./components/notifybox/index"

import Message from "./components/message/index"

import Slider from "./components/slider/index"

//模态框

import ModalBox from "./components/modalbox/index"


import Uploader from "./components/uploader/index"

import Spin from "./components/spin/index"

//表格

import Table from "./components/table/index"

import Code from "./components/Code/index"

import Line from "./components/line/index"

import Pager from "./components/pager/index"

import ColorPicker from "./components/colorpicker/Index"

import Position from "./components/position/Index"

import Card from "./components/card/Index"

import { App } from 'vue';



import Drag from "./directive/DragDirective"

import AlertBox from "./components/alert/Index"

import Loading from "./directive/Loading"

import Rating from "../packages/components/rating/Index"

// import MessageBox from "@feelui/MessageBox"


import "../packages/styles/app.less";

import Drawer from "../packages/components/drawer/Index"

import BreadCrumb from "@/packages/components/breadcrumb/index";

import Empty from "@/packages/components/empty/Index"





export default {
    install: function (app: App<Element>, options: any) {
        button.install(app)
        Layout.install(app)
        Input.install(app)

        Number.install(app)
        Radio.install(app)

        CheckBox.install(app)
        Switch.install(app)

        Anim.install(app)
        Collapse.install(app)

        Form.install(app)
        Select.install(app)

        Tab.install(app)
        DateTimePicker.install(app)

        ProgressBar.install(app)
        Icon.install(app)
        Tree.install(app)

        Menu.install(app)
        NotifyBox.install(app)

        Message.install(app)

        Slider.install(app)
        ModalBox.install(app)
        Table.install(app)
        Uploader.install(app)
        Code.install(app)
        Line.install(app)
        Pager.install(app)
        Text.install(app)
        Tag.install(app)
        Spin.install(app)
        ColorPicker.install(app)
        Position.install(app)
        Card.install(app)
        AlertBox.install(app)
        Loading.install(app)
        Rating.install(app)
        Drawer.install(app)
        BreadCrumb.install(app)

        Empty.install(app)
    }
}