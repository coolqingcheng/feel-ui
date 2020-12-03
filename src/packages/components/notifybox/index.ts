import { App } from "vue"
import NotifyBox from "./NotifyBox.vue"

export default {
    install: (app: App) => {
        app.component(NotifyBox.name, NotifyBox)
    }
}