import { App } from 'vue'

import { msg } from "./msg"

export default {
    install: (app: App) => {
        app.config.globalProperties.$message = msg.init()
    }
}