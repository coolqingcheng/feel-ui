import { App, DirectiveBinding } from "vue";


const tooltip = {
}

const install = (app: App) => {
    app.directive('tooltip', {
        mounted(el: HTMLElement, bindings: DirectiveBinding) {
            console.log('初始化tooltip');
            console.log(el);
            console.log(bindings);
        },
        updated(el: HTMLElement, bindings, DirectiveBinding) {

        }
    })
}

export default {
    install
}