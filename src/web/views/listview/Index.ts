import { App } from "vue"
import RecylerView from "./RecyclerView.vue"

export default {
    install: (app: App) => {
        app.component(RecylerView.name, RecylerView)
    }
}