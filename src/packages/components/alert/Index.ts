import { App } from 'vue';

import { alert } from "./AlertBox"


export default {
    install: (app: App) => {
        app.config.globalProperties.$alert = alert
    }
}