import messageBox from "../components/message-box"

import { ComponentInternalInstance } from "vue"

const ShowMessageBox = (ctx: ComponentInternalInstance, content: string, title: string, close: (status: boolean) => void) => {
    ctx.appContext.config.globalProperties.$alert({
        title: title,
        content:
            content,
        close: close,
    });
}

export {
    ShowMessageBox
}