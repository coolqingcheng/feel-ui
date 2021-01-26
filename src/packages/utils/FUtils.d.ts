import { ComponentInternalInstance } from "vue";
declare const ShowAlert: (ctx: ComponentInternalInstance, content: string, title: string, close: (status: boolean) => void) => void;
declare const ShowMessage: (ctx: ComponentInternalInstance, type: MessageType, message: string) => void;
declare const ShowNotify: (ctx: ComponentInternalInstance, type: MessageType, title: string, content: string, close: () => void, duration?: number) => void;
/**
 * 消息类型
 */
declare enum MessageType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}
export { ShowAlert, ShowMessage, ShowNotify, MessageType };
