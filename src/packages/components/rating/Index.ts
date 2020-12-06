import { App } from "vue"
import Rating from "./Rating.vue"

export default {
    install: (app: App) => {
        app.component(Rating.name,Rating)
    }
}