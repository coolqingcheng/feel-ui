import {
    createApp
} from 'vue'
import WelCome from './WelCome.vue'
import feelui from './packages/Index'
import router from './router'
import "./assets/typora-vue-theme-master/vue.css"
import "prismjs/themes/prism.css"
import { AutoRegisterComponent } from "./views/AutoRegister"
import iconOption from "./packages/components/icon/IconOption"
iconOption.BaseUrl = "/feel-ui/"

const app = createApp(WelCome).use(router);

app.use(feelui)
AutoRegisterComponent(app);
app.mount('#app')