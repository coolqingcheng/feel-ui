import { App } from "vue"
import Position from "./Position.vue"

export default {
    install:(app: App)=>{
        app.component(Position.name, Position)
    }
}