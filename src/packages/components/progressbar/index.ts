import ProgressBar from "./ProgressBar.vue"
import TopProgressBar from "./TopProgressBar.vue"
import CircularProgressBar from './CircularProgressBar.vue'
import { App } from "vue"
export default {
    install: (app: App) => {
        app.component(ProgressBar.name, ProgressBar)
        app.component(TopProgressBar.name, TopProgressBar)
        app.component(CircularProgressBar.name, CircularProgressBar)
    }
}