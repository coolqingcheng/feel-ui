import { App } from "vue"
import Loading from "./Loading.vue"

export default {
    install(app: App) {
        app.component(Loading.name,Loading)
    }
}