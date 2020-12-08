import { Ref, VNode } from "vue";
export interface LoadingOption {
    text: string;
    visible: boolean;
}
export interface loadingComponentInfo {
    setText(v: string): void;
    setVisible(status: boolean): void;
    vm: VNode;
    text: Ref<string>;
    visible: Ref<boolean>;
    destory(): void;
}
export declare function createLoadingComponent(option: LoadingOption): loadingComponentInfo;
