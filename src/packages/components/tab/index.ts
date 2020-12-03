import { App } from 'vue'
import Tab from './Tab.vue'
import TabItem from './TabItem.vue'
export default {
    install: (app: App) => {
        app.component(Tab.name, Tab)
        app.component(TabItem.name, TabItem)
    }
}