import ColorPicker from "./ColorPicker.vue"
import ColorBlock from "./ColorBlock.vue"
import { App } from "vue"

export default {
    install: (app: App) => {
        app.component(ColorPicker.name, ColorPicker)
        app.component(ColorBlock.name, ColorBlock)
    }
}