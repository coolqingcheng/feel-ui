import { FormEvent } from '*.vue';
import { InjectionKey } from "vue";

interface FormItemInject {
    update: (e: FormEvent | undefined) => Promise<void>;
}
const formItemInjectKey: InjectionKey<FormItemInject> = Symbol('form-item')

export interface ValidField {
    message: string
    field: string
}

interface FormInject {
    data: FormData;
    rules: Object;
    direction: string;
    fieldValid: (field: string) => { message: string, field: string }[];
    validateItem: (field: string) => Promise<void>;
}

interface FormData {
    labelWidth: number;
    model: Object;
}

const formInjectKey: InjectionKey<FormInject> = Symbol('form')

export {
    FormItemInject,
    formItemInjectKey,
    formInjectKey,
    FormInject,
    FormData
}