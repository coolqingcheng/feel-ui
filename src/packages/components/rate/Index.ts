import { App } from "vue"
import Rate from "./Rate.vue"

export default {
    install:(app: App)=>{
        app.component(Rate.name,Rate)
    }
}