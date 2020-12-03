import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import feelui from "../packages/Index"
import "../packages/styles/app.less"
import "../web/theme/typora-vue-theme-master/vue.css"
import "prismjs/themes/prism.css"
import { AutoRegisterComponent } from "./views/AutoRegister"

const app = createApp(App);
AutoRegisterComponent(app);
app.use(router).use(feelui).mount("#app")