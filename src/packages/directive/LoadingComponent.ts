import { createVNode, getCurrentInstance, h, onUnmounted, reactive, Ref, toRefs, VNode } from "vue"

// import Icon from "../components/icon/Icon.vue"
import FadeAnim from "../components/anim/FadeAnim.vue"

import Loading from "../components/loading/Loading.vue"



export interface LoadingOption {
    text: string,
    visible: boolean
}

export interface loadingComponentInfo {
    setText(v: string): void
    setVisible(status: boolean): void
    vm: VNode
    text: Ref<string>
    visible: Ref<boolean>
    destory(): void
}



export function createLoadingComponent(option: LoadingOption): loadingComponentInfo {

    let vm: VNode;
    const data = reactive({
        ...option
    })
    const setText = (v: string) => {
        data.text = v;
    }
    const setVisible = (status: boolean) => {
        data.visible = status
    }

    const destory = () => {
        let element = vm.el as HTMLElement
        element.parentNode?.removeChild(element)
    }


    vm = createVNode({
        setup() {
            return loadingComponentInfo
        },
        render() {
            const mask = h('div', {
                class: 'f-v-loading',

            }, [
                h(Loading),
                h("span", this.text),
            ])
            return h(FadeAnim, {
            }, {
                default: () => {
                    if (this.visible) {
                        return mask
                    }
                    return h('span')
                }
            })
        }
    })
    const loadingComponentInfo: loadingComponentInfo = {
        ...toRefs(data),
        setText,
        setVisible,
        vm,
        destory
    }
    return loadingComponentInfo
}

