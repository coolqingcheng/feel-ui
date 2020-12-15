"use strict";
exports.__esModule = true;
var MessageBox_1 = require("./MessageBox");
exports["default"] = {
    install: function (app) {
        app.config.globalProperties.$alert = MessageBox_1.alert;
    }
};
