"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("./styles/app.less");
var index_1 = require("./components/button/index");
var index_2 = require("./components/layout/index");
var index_3 = require("./components/input/index");
var Index_1 = require("./components/number/Index");
var index_4 = require("./components/radio/index");
var index_5 = require("./components/checkbox/index");
var index_6 = require("./components/switch/index");
var Index_2 = require("./components/text/Index");
var index_7 = require("./components/collapse/index");
//下拉框
var index_8 = require("./components/select/index");
//时间选择
var index_9 = require("./components/datepicker/index");
//动画
var index_10 = require("./components/anim/index");
var index_11 = require("./components/form/index");
//tab
var index_12 = require("./components/tab/index");
//进度条
var index_13 = require("./components/progressbar/index");
var index_14 = require("./components/icon/index");
var index_15 = require("./components/tree/index");
var index_16 = require("./components/menu/index");
var index_17 = require("./components/tag/index");
//通知
var index_18 = require("./components/notifybox/index");
var notify_1 = require("./components/notifybox/notify");
var msg_1 = require("./components/message/msg");
var index_19 = require("./components/message/index");
var index_20 = require("./components/slider/index");
//模态框
var index_21 = require("./components/modalbox/index");
var index_22 = require("./components/uploader/index");
var index_23 = require("./components/spin/index");
//表格
var index_24 = require("./components/table/index");
var index_25 = require("./components/Code/index");
var index_26 = require("./components/line/index");
var index_27 = require("./components/pager/index");
var Index_3 = require("./components/colorpicker/Index");
var Index_4 = require("./components/position/Index");
var Index_5 = require("./components/card/Index");
var components = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, index_1["default"]), index_2["default"]), index_3["default"]), Index_1["default"]), index_4["default"]), index_5["default"]), index_6["default"]), index_10["default"]), index_7["default"]), index_11["default"]), index_8["default"]), index_12["default"]), index_9["default"]), index_13["default"]), index_14["default"]), index_15["default"]), index_16["default"]), index_18["default"]), index_19["default"]), index_20["default"]), index_21["default"]), index_24["default"]), index_22["default"]), index_25["default"]), index_26["default"]), index_27["default"]), Index_2["default"]), index_17["default"]), index_23["default"]), Index_3["default"]), Index_4["default"]), Index_5["default"]);
var DragDirective_1 = require("./directive/DragDirective");
var Index_6 = require("./components/message-box/Index");
var feelui = {
    install: function (Vue, options) {
        Vue.use(Index_6["default"]);
        for (var item in components) {
            Vue.component(components[item].name, components[item]);
        }
        Vue.config.globalProperties.$notify = notify_1["default"].notify.show();
        Vue.config.globalProperties.$message = msg_1["default"].msg.init();
        DragDirective_1["default"].Install(Vue);
    }
};
exports["default"] = feelui;
