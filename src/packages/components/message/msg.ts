import Message from "./Message.vue"
import { genRandCode } from "../../utils/feelutils"
import { createApp } from "vue"

const msg = {
    init: function () {
        const list: { id: string, component: any }[] = []
        console.log('初始化消息组件')
        function update(id: string) {
            console.log('update');
            let index = list.findIndex(a => a.id == id)
            if (index > -1) {
                list.splice(index, 1)
            }
            for (let i = 0; i < list.length; i++) {
                if (i == 0) {
                    let component = list[i].component
                    component.$el.style.top = "40px";
                } else {
                    let pre = list[i - 1].component;
                    let component = list[i].component;
                    component.$el.style.top = ((pre.$el.clientHeight + parseInt(pre.$el.style.top)) + 20) + 'px'
                }
            }
        }
        return function (opt: any) {
            console.log(opt)
            let code = genRandCode();
            let id = "notify-" + code;
            let node = document.querySelector("#" + id);
            if (!node) {
                node = document.createElement("div");
                node.id = id;
                document.body.appendChild(node);
            }
            let duration = 0;
            if (Object.prototype.hasOwnProperty.call(opt, 'duration')) {
                duration = opt['duration']
            } else {
                duration = 2500;
            }
            let app = createApp(Message, {
                message: opt.content,
                id: id,
                duration: duration,
                closedFunc: update
            });
            let component = app.mount(node)
            // component.setCloseCallBack(update);
            if (list.length) {
                let item = list[list.length - 1].component
                component.$el.style.top = ((item.$el.clientHeight + parseInt(item.$el.style.top))) + 'px'
                setTimeout(() => {
                    component.$el.style.top = (parseInt(component.$el.style.top) + 20) + 'px'
                }, 50);
            } else {
                component.$el.style.top = "20px";
                setTimeout(() => {
                    component.$el.style.top = "40px";
                }, 50);
            }
            setTimeout(() => {
                component.$el.style.opacity = 1
            }, 50);
            list.push({
                id: id,
                component: component
            })
            setTimeout(() => {
                list.map(item => {
                    item.component.updateAnimProperty()
                })
            }, 50);

            return component;
        }
    }
}
export default {
    msg
}