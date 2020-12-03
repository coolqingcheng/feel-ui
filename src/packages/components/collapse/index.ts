import { App } from 'vue';
import Collapse from './Collapse.vue'
import CollapsePanel from './CollapsePanel.vue';

export default {
    install: (app: App) => {
        app.component(Collapse.name, Collapse)
        app.component(CollapsePanel.name, CollapsePanel)
    }
    
}