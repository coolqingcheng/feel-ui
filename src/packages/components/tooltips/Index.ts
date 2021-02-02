import { App } from "vue"
import ToolTip from "./ToolTip.vue"

export default {
    install: (app: App) => {
        app.component(ToolTip.name,ToolTip)
    }
}