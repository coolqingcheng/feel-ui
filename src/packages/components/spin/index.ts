import { App } from "vue";
import Spin from "./Spin.vue";

export default {
    install: (app: App) => {
        app.component(Spin.name, Spin)
    }
}