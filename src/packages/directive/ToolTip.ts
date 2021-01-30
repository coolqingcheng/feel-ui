import { App } from "vue";


const tooltip = {
}

const Install = (app: App) => {
    app.directive('tooltip', tooltip)
}

export {
    Install
}