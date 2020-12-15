import { App } from "vue"

import { notify } from "./notify"

export default {
    install: (app: App) => {
        app.config.globalProperties.$notify = notify.show()
    }
}