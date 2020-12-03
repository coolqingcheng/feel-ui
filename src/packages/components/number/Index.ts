import { App } from "vue"
import Number from "./Number.vue"

export default {
    install: (app: App) => {
        app.component(Number.name, Number)
    }
}