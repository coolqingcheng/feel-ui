import "./styles/app.less";
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

import notify from "./components/notifybox/notify"
import msg from "./components/message/msg"

import Message from "./components/message/index"

import Slider from "./components/slider/index"

//模态框

import ModalBox from "./components/modalbox/index"

import msgBox from "./components/modalbox/msgbox"

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



const components = {
    ...button,
    ...Layout,
    ...Input,
    ...Number,
    ...Radio,
    ...CheckBox,
    ...Switch,
    ...Anim,
    ...Collapse,
    ...Form,
    ...Select,
    ...Tab,
    ...DateTimePicker,
    ...ProgressBar,
    ...Icon,
    ...Tree,
    ...Menu,
    ...NotifyBox,
    ...Message,
    ...Slider,
    ...ModalBox,
    ...Table,
    ...Uploader,
    ...Code,
    ...Line,
    ...Pager,
    ...Text,
    ...Tag,
    ...Spin,
    ...ColorPicker,
    ...Position,
    ...Card
}

import Drag from "./directive/DragDirective"


const feelui = {
    install: function (Vue: App<Element>, options: any) {
        for (let item in components) {
            Vue.component(components[item].name, components[item])
        }
        Vue.config.globalProperties.$notify = notify.notify.show();
        Vue.config.globalProperties.$message = msg.msg.init();
        Vue.config.globalProperties.$messagebox = msgBox.msgBox.init();
        Drag.Install(Vue);
    }
}

export default feelui