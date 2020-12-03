import ExpandTransition from './ExpandTransition.vue'
import BasicAnimTransition from './BasicAnimTransition.vue'
import DropAnim from "./DropAnim.vue"
import FadeAnim from "./FadeAnim.vue"
import DialogAnim from "./DialogAnim.vue"
import ExpandAnim from "./ExpandAnim.vue"
import { App } from 'vue'
export default {
    install: (app: App) => {
        app.component(BasicAnimTransition.name, BasicAnimTransition)
        app.component(BasicAnimTransition.name, BasicAnimTransition)
        app.component(DropAnim.name, DropAnim)
        app.component(FadeAnim.name, FadeAnim)
        app.component(DialogAnim.name, DialogAnim)
        app.component(ExpandAnim.name, ExpandAnim)
    }
}