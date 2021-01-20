import { BaseComponent } from "./BaseComponent";

export declare class FeelForm extends BaseComponent {
    /**
     * 验证表单
     */
    validate(): Promise<void>

    /**
     * 验证单个字段
     * @param field 
     */
    validateItem(field: string): Promise<void>

    /**
     * 重置表单
     */
    reset(): void
    /**
     * 清除表单验证信息
     */
    clearValidate(): void
}
