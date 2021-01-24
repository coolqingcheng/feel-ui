import { InjectionKey } from "vue";
import { FDialogIject } from "./FDialog"
/**
 * 定义所有的需要注入的Inject的key
 */

const dialogInjectKey: InjectionKey<FDialogIject> = Symbol('f-dialog')

export {
    dialogInjectKey
}