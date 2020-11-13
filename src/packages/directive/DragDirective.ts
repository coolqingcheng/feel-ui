import { App } from 'vue';

export default {
    Install(Vue: App<Element>) {
        Vue.directive('drag', {
            mounted(el: HTMLElement, bind) {
                el.onmousedown = (e) => {
                    let elLeft = el.offsetLeft;
                    let elTop = el.offsetTop;
                    let dom = <HTMLElement>e.target;
                    if (dom.classList.contains('drag-target')) {
                        let x = e.clientX;
                        let y = e.clientY;
                        document.onmousemove = (move: MouseEvent) => {
                            let bodyW = document.body.clientWidth;
                            let bodyH = document.body.clientHeight;

                            let left = elLeft - (x - move.clientX);
                            if (left < 0) {
                                left = 0;
                            }
                            if (left > bodyW - el.offsetWidth) {
                                left = bodyW - el.offsetWidth;
                            }
                            el.style.left = left + 'px'
                            let top = elTop - (y - move.clientY);
                            if (top < 0) {
                                top = 0;
                            }
                            if (top > bodyH - el.offsetHeight) {
                                top = bodyH - el.offsetHeight
                            }
                            el.style.top = top + 'px'

                            document.onmouseup = (up: MouseEvent) => {
                                document.onmousemove = null;
                                document.onmouseup = null
                            }
                            if (window.getSelection()) {
                                window.getSelection()?.removeAllRanges()
                            }
                        }
                    }
                }
            },
            unmounted(el, bind) {
                el.onmousedown = null;
            }

        })
    }
}