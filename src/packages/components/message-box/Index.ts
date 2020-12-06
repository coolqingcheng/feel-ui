import { App } from 'vue';

import { alert } from "./MessageBox"


export default {
    install: (app: App) => {
        app.config.globalProperties.$alert = alert
    }
}