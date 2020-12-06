import { App, createApp, createCommentVNode, createVNode, h, onMounted, render } from "vue";


import { createLoadingComponent } from "./LoadingComponent"


export default {
    install: (vue: App<Element>) => {
        vue.directive('loading', {
            mounted(el: HTMLElement, bind) {
                console.log(el.tagName);
                
                if (el.tagName !== 'DIV') return;
                el.style.position = "relative"
                let text = el.getAttribute("loading-text")
                if (!text) {
                    text = "loading..."
                }
                const { loadingComponent } = createLoadingComponent({
                    text: text,
                    visible: bind.value
                })
                render(loadingComponent, document.createElement('div'))
                el.appendChild(loadingComponent.el as Element)
                el['instance'] = loadingComponent;
            },
            updated(el, bind) {
                if (el.tagName !== 'DIV') return;
                let text = el.getAttribute("loading-text")
                if (!text) {
                    text = "loading..."
                }
                if (el['instance']) {
                    el['instance'].component.ctx.setText(text)
                    el['instance'].component.ctx.setVisible(bind.value)
                }
            },
            unmounted(el: HTMLElement) {
                if (el['instance']) {
                    el['instance'].component.ctx.destory(el)
                }
            }
        })


    }

}