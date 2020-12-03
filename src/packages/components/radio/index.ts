import { App } from 'vue'
import Radio from './Radio.vue'

export default {
    install:(app: App)=>{
        app.component(Radio.name, Radio)
    }
}