
import { createApp } from 'vue'
import msgBox from "../components/modalbox/MessageBox.vue"
import { genRandCode } from './feelutils';
import { MessageBox } from "@/types/MessageBox"
/**
 * 弹出一个模态框提示
 * @param message 
 */
function showMessageBox(message: MessageBox) {
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
            message.closeFunc();
        }
    })
    app.mount(node)

}

export {
    showMessageBox
}