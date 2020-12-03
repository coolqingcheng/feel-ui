import { App } from 'vue'
import Code from './Code.vue'
export default {
    install: (app: App) => {
        app.component(Code.name, Code)
    }
}