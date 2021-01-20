import { BaseComponent } from "./BaseComponent";


export declare class FeelTable extends BaseComponent {
    /**
     * 获取所有的选中
     */
    getCheckAll(): string[];

    /**
     * 选中全部
     */
    checkAll(): void;

    /**
     * 获取单选值
     */
    getRadioValue(): string;

    /**
     * 清除单选状态
     */
    clearRadio(): void;
}

export interface HeaderListItem {
    width: number | 0
    type: number
    setWidth: number | 0
    field: string
    title: string
}

export interface TableData {
    headerList: Array<HeaderListItem>;
    dataList: Array<any>;
    checkedList: string[];
    radioValue: string;
    sort: {
        field: string;
        value: string;
    };
    w: number;
}