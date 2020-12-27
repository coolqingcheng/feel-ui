import { App } from "vue"
import Tag from "./Tag.vue"

export default {
    install: (app: App) => {
        app.component(Tag.name, Tag)
    }
}