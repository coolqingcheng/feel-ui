import { App } from 'vue'
import Icon from './Icon.vue'

export default {
    install: (app: App) => {
        app.component(Icon.name,Icon)
    }
}