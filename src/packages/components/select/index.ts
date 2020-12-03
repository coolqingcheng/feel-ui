import { App } from 'vue';
import Select from './Select.vue';

export default {
    install: (app: App) => {
        app.component(Select.name, Select)
    }
}