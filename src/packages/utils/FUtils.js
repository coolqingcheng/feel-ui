"use strict";
exports.__esModule = true;
var ShowAlert = function (ctx, content, title, close) {
    ctx.appContext.config.globalProperties.$alert({
        title: title,
        content: content,
        close: close
    });
};
exports.ShowAlert = ShowAlert;
var ShowMessage = function (ctx, type, message) {
    ctx.appContext.config.globalProperties.$message({
        content: message,
        close: close
    });
};
exports.ShowMessage = ShowMessage;
var ShowNotify = function (ctx, type, title, content, close, duration) {
    if (duration === void 0) { duration = 3000; }
    ctx.appContext.config.globalProperties.$notify({
        title: title,
        content: content,
        duration: duration,
        close: close
    });
};
exports.ShowNotify = ShowNotify;
/**
 * 消息类型
 */
var MessageType;
(function (MessageType) {
    MessageType["SUCCESS"] = "success";
    MessageType["INFO"] = "info";
    MessageType["WARNING"] = "warning";
    MessageType["ERROR"] = "error";
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;
