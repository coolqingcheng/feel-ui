import { App } from "vue"
import FTag from "./FTag.vue"

export default {
    install: (app: App) => {
        app.component(FTag.name, FTag)
    }
}