import { App } from 'vue';

import Drawer from "./Drawer.vue"


export default {
    install: (app: App) => {
        app.component(Drawer.name, Drawer)
    }
}