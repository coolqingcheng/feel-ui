import { ComponentInternalInstance, inject, onMounted, onUnmounted, Ref } from 'vue';

function outClick(html: Ref<Element | undefined>, func: Function) {
    const outClick = (e: MouseEvent) => {
        let clickEl = <Element>e.target;
        if (html.value?.contains(clickEl) == false) {
            func()
        }
    };
    onMounted(() => {
        document.addEventListener('mousedown', outClick, false)
    })
    onUnmounted(() => {
        document.removeEventListener('mousedown', outClick, false)
    })

}

/**
 * 屏幕大小修改
 * @param func 
 */
function windowOnResize(func: Function) {

    const resize = (e: UIEvent) => {
        func(e)
    }
    onMounted(() => {
        window.addEventListener("resize", resize);
    })
    onUnmounted(() => {
        window.removeEventListener("resize", resize);
    })
}

function docOnScroll(func: Function) {
    const scroll = (e: Event) => {
        func(e)
    }
    onMounted(() => {
        document.addEventListener("scroll", scroll);
    })
    onUnmounted(() => {
        document.removeEventListener("scroll", scroll);
    })
}

// 驼峰转换下划线
function toLine(name: string) {
    let str = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    return str.substring(1)
}
/**
 * 获取文件名，不要后缀名
 * @param o 
 */
function getFileName(o: string) {
    var pos = o.lastIndexOf('/');
    let end = o.lastIndexOf('.')
    return o.substring(pos + 1, end);
}

/**
 * 获取一个el节点在屏幕中间的left值
 * @param el 
 */
function getCenterXbyBody(el: HTMLElement) {

    let w = document.body.offsetWidth

    return w / 2 - (parseFloat(getComputedStyle(el).width) / 2)
}
/**
 * 获取el在body的Y
 * @param el 
 */
function getCenterYbyBody(el: HTMLElement) {
    let h = document.body.offsetHeight

    return h / 2 - (el.offsetHeight / 2)
}
function getBottomYbyBody(el: HTMLElement) {
    let h = document.body.offsetHeight

    return h - el.offsetHeight
}
/**
 * 获取el在屏幕左右边得left值
 * @param el 
 */
function getRightXByBody(el: HTMLElement) {
    let w = document.body.offsetWidth
    return w - el.offsetWidth;
}

/**
 * 判断是否在表单组件的FormItem组件内
 */
function checkInFormItem() {
    if (inject('form-item')) return true
    return false
}

enum Grid {
    sm,
    md,
    lg,
    xl,
    max
}

/**
 * 获取屏幕宽高的栅格值
 * @param call 
 */
function ScreenWdith(call: (grid: Grid) => void) {
    let w = document.body.scrollWidth;
    if (w <= 540) {
        call(Grid.sm)
    } else if (w > 540 && w <= 720) {
        call(Grid.md)
    } else if (w > 720 && w <= 960) {
        call(Grid.lg)
    } else if (w > 960 && w <= 1200) {
        call(Grid.xl)
    } else {
        call(Grid.max)
    }
}

export default {
    outClick,
    windowOnResize,
    docOnScroll,
    toLine,
    getFileName,
    getRightXByBody,
    getBottomYbyBody,
    getCenterXbyBody,
    getCenterYbyBody,
    checkInFormItem
}