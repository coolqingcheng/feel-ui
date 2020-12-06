import { flushPromises } from "@vue/test-utils"
import { createVNode, getCurrentInstance, h, onUnmounted, reactive, toRefs } from "vue"

import Icon from "../components/icon/Icon.vue"
import FadeAnim from "../components/anim/FadeAnim.vue"



interface LoadingOption{
    text: string,
    visible:boolean
}



export function createLoadingComponent(option: LoadingOption) {
    
   
    const loadingComponent = createVNode({
        setup() {
            const ctx = getCurrentInstance();
            const data = reactive({
                ...option
            })
            const setText = (v:string) => {
                data.text = v;
            }
            const setVisible = (status: boolean)=>{
                data.visible = status
            }
            const destory = (el: HTMLElement) => {
                let context = ctx as any
                console.log();
                let ctxHtml = context.ctx.$el as HTMLElement
                ctxHtml.parentNode?.removeChild(ctxHtml)
                //感觉这样销毁好像不怎么对的样子，但是又没找到更合适的方法，希望某个大佬看到这行代码的时候。能有更好的意见
            }
            return {
                ...toRefs(data),
                setText,
                setVisible,
                destory
            }
        },
        render() {
            const mask =  h('div', {
                class: 'f-v-loading',
                
            }, [
                h(Icon, {
                    icon: 'loader'
                }),
                h("div", this.text),
            ])
            return h(FadeAnim, {
            }, {
                default: () => {
                    if (this.visible) {
                    return mask
                    }
                    return h('span')
            }})
        }
    })
    return {
        loadingComponent
    }
}

