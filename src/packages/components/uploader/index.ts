import { App } from 'vue'
import Uploader from './Uploader.vue'

export default {
    install: (app: App) => {
        app.component(Uploader.name, Uploader)
    }
}