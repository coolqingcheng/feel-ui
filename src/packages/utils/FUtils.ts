import { ComponentInternalInstance } from "vue"

const ShowAlert = (ctx: ComponentInternalInstance, content: string, title: string, close: (status: boolean) => void) => {
    ctx.appContext.config.globalProperties.$alert({
        title: title,
        content:
            content,
        close: close,
    });
}

const ShowMessage = (ctx: ComponentInternalInstance, type: MessageType, message: string) => {

}

const ShowNotify = (ctx: ComponentInternalInstance, type: MessageType, title: string, content: string, close: () => void, duration: number = 3000) => {
    ctx.appContext.config.globalProperties.$notify({
        title: title,
        content: content,
        duration: duration,
        close: close,
    });
}

/**
 * 消息类型
 */
enum MessageType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}

export {
    ShowAlert,
    ShowMessage,
    ShowNotify,
    MessageType
}