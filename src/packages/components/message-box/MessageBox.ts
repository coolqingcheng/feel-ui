import { genRandCode } from '@/packages/utils/feelutils';
import { MessageBoxInput } from '@feelui/MessageBox';
import { createApp } from 'vue';

import msgBox from "./MessageBox.vue"
const alert = (message: MessageBoxInput) => {

    let code = genRandCode();
    let id = "f-msg-box-" + code;
    let node = document.createElement('div')
    node.id = id;
    document.body.appendChild(node);
    let app = createApp(msgBox, {
        title: message.title,
        content: message.content,
        closeFunc: () => {
            node.remove();
            if (message['closeFunc']) {
                message.closeFunc();
            }
        }
    })
    app.mount(node)

}

export {
    alert
}