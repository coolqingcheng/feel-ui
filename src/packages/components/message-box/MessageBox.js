"use strict";
exports.__esModule = true;
exports.alert = void 0;
var feelutils_1 = require("@/packages/utils/feelutils");
var vue_1 = require("vue");
var MessageBox_vue_1 = require("./MessageBox.vue");
var alert = function (message) {
    var code = feelutils_1.genRandCode();
    var id = "f-msg-box-" + code;
    var node = document.createElement('div');
    node.id = id;
    document.body.appendChild(node);
    var app = vue_1.createVNode(MessageBox_vue_1["default"], {
        title: message.title,
        content: message.content,
        closeFunc: function (status) {
            node.remove();
            if (message['close']) {
                message.close(status);
            }
        }
    });
    vue_1.render(app, document.createElement('div'));
    node.append(app.el);
};
exports.alert = alert;
