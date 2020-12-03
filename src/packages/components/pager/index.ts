import { App } from "vue"
import Pager from "./Pager.vue"



export default {
    install: (app: App) => {
        app.component(Pager.name, Pager)
    }
}