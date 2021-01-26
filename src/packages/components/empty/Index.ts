import { App } from "vue";

import Empty from "./Empty.vue"

export default {
    install(app: App) {
        app.component(Empty.name,Empty)
    }
}