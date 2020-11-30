"use strict";
exports.__esModule = true;
var Message_vue_1 = require("./Message.vue");
var feelutils_1 = require("../../utils/feelutils");
var vue_1 = require("vue");
var msg = {
    init: function () {
        var list = [];
        console.log('初始化消息组件');
        function update(id) {
            console.log('update');
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
                duration = 2500;
            }
            var app = vue_1.createApp(Message_vue_1["default"], {
                message: opt.content,
                id: id,
                duration: duration,
                closedFunc: update
            });
            var component = app.mount(node);
            // component.setCloseCallBack(update);
            if (list.length) {
                var item = list[list.length - 1].component;
                component.$el.style.top = ((item.$el.clientHeight + parseInt(item.$el.style.top))) + 'px';
                setTimeout(function () {
                    component.$el.style.top = (parseInt(component.$el.style.top) + 20) + 'px';
                }, 50);
            }
            else {
                component.$el.style.top = "20px";
                setTimeout(function () {
                    component.$el.style.top = "40px";
                }, 50);
            }
            setTimeout(function () {
                component.$el.style.opacity = 1;
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
    msg: msg
};
