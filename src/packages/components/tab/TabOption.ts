export interface DataModel {
    titles: Array<string>;
    selectTitle: string;
    more: boolean;
    showMore: boolean;
}

export interface TabInject {
    register: (title: string) => void;
    headerClick: (title: string) => void;
    data: DataModel;
}