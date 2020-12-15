import { genRandCode } from '@/packages/utils/feelutils';
import { createApp, createVNode, render } from 'vue';

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
    let app = createVNode(msgBox, {
        title: message.title,
        content: message.content,
        closeFunc: (status:boolean) => {
            node.remove();
            if (message['close']) {
                message.close(status);
            }
        }
    })
    render(app,document.createElement('div'))
    node.append(app.el as Element)

}

export {
    alert
}