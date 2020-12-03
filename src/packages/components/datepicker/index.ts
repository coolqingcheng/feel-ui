import DatePicker from './DatePicker.vue'
import TimePicker from './TimePicker.vue'
import DateTime from './DateTime.vue'

import YearPicker from './picker/YearPicker.vue'
import MonthPicker from './picker/MonthPicker.vue'
import DateTimeRangePicker from "./picker/DateTimeRangePicker.vue"

import Time from "./Time.vue"
import { App } from 'vue'
export default {

    install: (app: App) => {
        app.component(DatePicker.name, DatePicker)
        app.component(DateTime.name, DateTime)
        app.component(TimePicker.name, TimePicker)
        app.component(YearPicker.name, YearPicker)
        app.component(MonthPicker.name, MonthPicker)
        app.component(DateTimeRangePicker.name, DateTimeRangePicker)
        app.component(Time.name, Time)
    }
    
}