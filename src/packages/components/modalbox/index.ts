import ModalBox from "./ModalBox.vue"
import Dialog from "./Dialog.vue"
import { App } from "vue"

export default {
    install: (app: App) => {
        app.component(ModalBox.name, ModalBox)
        app.component(Dialog.name, Dialog)
    }
}