declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component

  export interface FormEvent {
    type: string,
    value: any
  }

  export interface ValidField {
    message: string
    field: string
  }

}

declare module '*.md' {

}

interface ValueEvent<T> {
  value: T
}

