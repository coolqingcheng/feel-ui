import { InjectionKey } from "vue";
import { BaseComponent } from "./BaseComponent";

export interface FDialogIject {

    /**
     * 对话框关闭回调
     */
    closed(status: boolean): void
    /**
     * 设置对话框是否关闭
     * @param status true 展开 false关闭
     */
    setVisible(status: boolean): void

}



export class FDialog extends BaseComponent {
    /**
     * 显示或者隐藏对话框
     * @param status true显示，false隐藏
     */
    show(status: boolean): void;
}
