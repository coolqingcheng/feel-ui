import { App } from "vue";
import BreadCrumb from "./BreadCrumb.vue";


export default {
    install(app: App) {
        app.component(BreadCrumb.name, BreadCrumb)
    }
}