import { App, InjectionKey } from "vue";
import BreadCrumb from "./BreadCrumb.vue";
import BreadCrumbItem from "./BreadCrumbItem.vue";

export interface BreadCrumbInject {
    separator: String
}



export const BreadCrumbInjectKey: InjectionKey<BreadCrumbInject> = Symbol('form-item')


export default {
    install(app: App) {
        app.component(BreadCrumb.name, BreadCrumb)
        app.component(BreadCrumbItem.name, BreadCrumbItem)
    }
}