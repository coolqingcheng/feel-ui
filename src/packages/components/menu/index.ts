import { App } from "vue"
import Menu from "./Menu.vue"
import MenuGroup from "./MenuGroup.vue"
import MenuItem from "./MenuItem.vue"
export default {
    install: (app: App) => {
        app.component(Menu.name, Menu)
        app.component(MenuGroup.name, MenuGroup)
        app.component(MenuItem.name, MenuItem)
    }
}