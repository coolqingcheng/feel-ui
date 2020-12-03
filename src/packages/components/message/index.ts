import { App } from 'vue'
import Message from './Message.vue'

export default {
    install: (app: App) => {
        app.component(Message.name, Message)
    }
}