import { App } from "vue"
import Line from "./Line.vue"

export default {
    install: (app: App) => {
        app.component(Line.name, Line)
    }
}