import { App } from "vue"
import FText from "./FText.vue"

export default {
    install: (app: App) => {
        app.component(FText.name, FText)
    }
}