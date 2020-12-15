export interface MessageBoxInput {
    title: string;
    content: string;
    close: (status: boolean) => void;
}
declare const alert: (message: MessageBoxInput) => void;
export { alert };
