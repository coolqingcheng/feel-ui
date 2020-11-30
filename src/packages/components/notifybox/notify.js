"use strict";
exports.__esModule = true;
var NotifyBox_vue_1 = require("./NotifyBox.vue");
var vue_1 = require("vue");
var feelutils_1 = require("../../utils/feelutils");
var notify = {
    show: function () {
        var list = [];
        // console.log('初始化通知组件')
        function update(id) {
            var index = list.findIndex(function (a) { return a.id == id; });
            if (index > -1) {
                list.splice(index, 1);
            }
            for (var i = 0; i < list.length; i++) {
                if (i == 0) {
                    var component = list[i].component;
                    component.$el.style.top = "40px";
                }
                else {
                    var pre = list[i - 1].component;
                    var component = list[i].component;
                    component.$el.style.top = ((pre.$el.clientHeight + parseInt(pre.$el.style.top)) + 20) + 'px';
                }
            }
        }
        return function (opt) {
            console.log(opt);
            var code = feelutils_1.genRandCode();
            var id = "notify-" + code;
            var node = document.querySelector("#" + id);
            if (!node) {
                node = document.createElement("div");
                node.id = id;
                document.body.appendChild(node);
            }
            var duration = 0;
            if (Object.prototype.hasOwnProperty.call(opt, 'duration')) {
                duration = opt['duration'];
            }
            else {
                duration = 4500;
            }
            var app = vue_1.createApp(NotifyBox_vue_1["default"], {
                title: opt.title,
                content: opt.content,
                id: id,
                duration: duration,
                closedFunc: update
            });
            var component = app.mount(node);
            // component.setCloseCallBack(update);
            if (list.length) {
                var item = list[list.length - 1].component;
                component.$el.style.top = ((item.$el.clientHeight + parseInt(item.$el.style.top)) + 20) + 'px';
            }
            else {
                component.$el.style.top = "40px";
            }
            setTimeout(function () {
                component.$el.style.transform = "translateX(-10px)";
            }, 50);
            list.push({
                id: id,
                component: component
            });
            setTimeout(function () {
                list.map(function (item) {
                    item.component.updateAnimProperty();
                });
            }, 50);
            return component;
        };
    }
};
exports["default"] = {
    notify: notify
};
