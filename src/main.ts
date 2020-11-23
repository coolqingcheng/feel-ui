import {
    createApp
} from 'vue'
import WelCome from './WelCome.vue'
import FeelUI from './packages/feelui'
// import "highlight.js/styles/tomorrow.css";
import hljs from "vue3-hljs"
import router from './router'

import "./assets/typora-vue-theme-master/vue.css"
import "prismjs/themes/prism.css"
import { AutoRegisterComponent } from "./views/AutoRegister"

const app = createApp(WelCome).use(router);

app.use(FeelUI).use(hljs)
AutoRegisterComponent(app);
app.mount('#app')