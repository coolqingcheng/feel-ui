import { App, render } from "vue";


import { createLoadingComponent, loadingComponentInfo } from "./LoadingComponent"


const loading = {
    mounted(el: HTMLElement, bind) {
        console.log('v-loading指令挂载');
        console.log(el.tagName)
        // if (['DIV', 'FORM'].indexOf(el.tagName) < 0) return;
        el.style.position = "relative"
        let text = el.getAttribute("loading-text")
        if (!text) {
            text = ""
        }

        const loadingComponentInstance = createLoadingComponent({
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
}

const Loadinginstall = (vue: App<Element>) => {
    vue.directive('loading', loading)
}

export {
    loading, Loadinginstall
}


