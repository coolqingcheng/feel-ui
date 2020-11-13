import MessageBox from "./MessageBox.vue"
import { createApp } from "vue"
import { genRandCode } from "../../utils/feelutils"

var msgBox = {

    init: function () {
        return function (opt: any) {
            let code = genRandCode();
            let id = "f-msg-box-" + code;
            let node = document.querySelector("#" + id);

            if (!node) {
                node = document.createElement("div");
                node.id = id;
                document.body.appendChild(node);
            }
            let app = createApp(MessageBox, {
                title: opt['title'], content: opt['content'], icon: opt['icon'], showCancel: opt['showCancel'],
                closeFunc: (res) => {
                    node?.remove()
                    if (opt['close']) {
                        opt['close'](res);
                    }
                }
            })
            app.mount(node);
            // component.setCloseCallBack((res) => {
            //     document.body.removeChild(node);
            //     if (opt['close']) {
            //         opt['close'](res);
            //     }
            // })
            // setTimeout(() => {
            //     component.setShow()
            // }, 50);

        }
    }

}


export default {
    msgBox
}