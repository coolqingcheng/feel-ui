import { App } from 'vue'
import Col from './grid/Col.vue'
import Row from './grid/Row.vue'

export default {
    install: (app: App) => {
        app.component(Col.name, Col)
        app.component(Row.name, Row)
    }
}