import { genRandCode } from '@/packages/utils/feelutils';
import { createApp } from 'vue';

import msgBox from "./MessageBox.vue"

export interface MessageBoxInput {
    title: string
    content: string
    close: (status:boolean) => void
}

const alert = (message: MessageBoxInput) => {

    let code = genRandCode();
    let id = "f-msg-box-" + code;
    let node = document.createElement('div')
    node.id = id;
    document.body.appendChild(node);
    let app = createApp(msgBox, {
        title: message.title,
        content: message.content,
        closeFunc: (status:boolean) => {
            node.remove();
            if (message['close']) {
                message.close(status);
            }
        }
    })
    app.mount(node)

}

export {
    alert
}