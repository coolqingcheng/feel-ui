import { App } from "vue"
import Table from "./Table.vue"
export default {
    install: (app: App) => {
        app.component(Table.name, Table)
    }
}