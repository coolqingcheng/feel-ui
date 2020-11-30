import { App } from 'vue';

import { alert } from "./MessageBox"

const install = (app: App) => {
    app.config.globalProperties.$alert = alert
}
export default install