"use strict";
exports.__esModule = true;
exports.ShowMessageBox = void 0;
var ShowMessageBox = function (ctx, content, title, close) {
    ctx.appContext.config.globalProperties.$alert({
        title: title,
        content: content,
        close: close
    });
};
exports.ShowMessageBox = ShowMessageBox;
