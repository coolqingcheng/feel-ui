
export interface MessageBoxInput {
    title: string
    content: string
    closeFunc: () => void
}

export interface FeelAlertMethod {

    (message: MessageBoxInput): () => void
}

declare module 'vue/types/vue' {
    interface Vue {
        $alert: FeelAlertMethod
    }

}