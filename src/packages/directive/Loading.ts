import { App, createApp, createCommentVNode, createVNode, h, onMounted, render } from "vue";


import { createLoadingComponent, loadingComponentInfo } from "./LoadingComponent"


export default {
    install: (vue: App<Element>) => {
        vue.directive('loading', {
            mounted(el: HTMLElement, bind) {
                
                if (el.tagName !== 'DIV') return;
                el.style.position = "relative"
                let text = el.getAttribute("loading-text")
                if (!text) {
                    text = ""
                }
                
                const  loadingComponentInstance  = createLoadingComponent({
                    text: text,
                    visible: bind.value
                })
                render(loadingComponentInstance.vm, document.createElement('div'))
                el.appendChild(loadingComponentInstance.vm.el as Element)
                el['instance'] = loadingComponentInstance;
            },
            updated(el, bind) {
                if (el.tagName !== 'DIV') return;
                let text = el.getAttribute("loading-text")
                if (!text) {
                    text = ""
                }
                if (el['instance']) {
                    let instance = el['instance'] as loadingComponentInfo;
                    instance?.setText(text)
                    instance?.setVisible(bind.value)
                }
            },
            unmounted(el: HTMLElement) {
                if (el['instance']) {
                    let instance = el['instance'] as loadingComponentInfo;
                    instance.destory();
                }
            }
        })


    }

}