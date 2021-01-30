import { App } from "vue"
import TimeLine from "./TimeLine.vue"
import TimeLineItem from "./TimeLineItem.vue"

export default {
    install: (app: App) => {
        app.component(TimeLine.name, TimeLine);
        app.component(TimeLineItem.name, TimeLineItem)
    }
}