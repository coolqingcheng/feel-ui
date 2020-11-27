import { FormEvent } from '*.vue';
import { InjectionKey } from "vue";

interface FormItemInject {
    update: (e: FormEvent | undefined) => Promise<void>;
}
const formItemInjectKey: InjectionKey<FormItemInject> = Symbol('form-item')

export {
    FormItemInject,
    formItemInjectKey
}