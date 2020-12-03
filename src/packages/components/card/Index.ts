import { App } from "vue"
import Card from "./Card.vue"

export default {
    install: (app: App) => {
        app.component(Card.name, Card)
    }
}