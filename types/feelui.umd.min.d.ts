

import { FButton } from "./Button"

import { App } from "vue"

declare module "v-feelui"
export class Button extends FButton {

}

declare const _default: {
    install(vue: App<any>, option: any)
}

export default _default