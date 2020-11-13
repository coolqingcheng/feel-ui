import gsap from "gsap"
function pointDrag(point: HTMLElement, panel: HTMLElement, callback: Function) {
    point.onmousedown = (e: MouseEvent) => {
        e.stopPropagation();

        let elLeft = point.offsetLeft;
        let elTop = point.offsetTop;
        let dom = <HTMLElement>e.target;
        let x = e.clientX;
        let y = e.clientY;
        let h = parseInt(getComputedStyle(panel).height);
        let w = parseInt(getComputedStyle(panel).width);
        document.onmousemove = (move: MouseEvent) => {
            let left = elLeft - (x - move.clientX);
            if (
                left <= w - point.offsetWidth / 2 &&
                left >= -point.offsetWidth / 2
            ) {
                point.style.left = left + "px";
            }
            let top = elTop - (y - move.clientY);
            if (
                top <= h - point.offsetHeight / 2 &&
                top >= -point.offsetHeight / 2
            ) {
                point.style.top = top + "px";
            }

            //计算出HSV的值 left为饱和度 top 为亮度
            //saturation 饱和度
            //value 亮度
            let v = 100 - ((parseInt(point.style.top) + point.offsetHeight / 2) / h) * 100;
            let s = ((parseInt(point.style.left) + point.offsetWidth / 2) / w) * 100;
            callback(Math.round(s), Math.round(v));

            //转换成颜色
            if (window.getSelection()) {
                window.getSelection()?.removeAllRanges();
            }
        };
        document.onmouseup = (up: MouseEvent) => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    }
}

/**
 * 设置点的位置，返回对应sv
 * @param point 
 * @param panel 
 * @param left 
 * @param top 
 * @param callback 
 */
function setPointPos(point: HTMLElement, panel: HTMLElement, left: number, top: number, callback: Function) {
    let L = (left - point.offsetWidth / 2) + 'px'
    let T = (top - point.offsetHeight / 2) + 'px'
    point.style.left = L;
    point.style.top = T
    let h = parseInt(getComputedStyle(panel).height);
    let w = parseInt(getComputedStyle(panel).width);
    let v = 100 - ((parseInt(point.style.top) + point.offsetHeight / 2) / h) * 100;
    let s = ((parseInt(point.style.left) + point.offsetWidth / 2) / w) * 100;
    callback(Math.round(s), Math.round(v));

}


function setPointPosBySv(point: HTMLElement, panel: HTMLElement, s: number, v: number) {
    let h = parseInt(getComputedStyle(panel).height);
    let w = parseInt(getComputedStyle(panel).width);
    let hStep = h / 100;
    let wStep = w / 100;
    point.style.left = (wStep * s - (point.offsetWidth / 2)) + 'px';
    point.style.top = (h - (hStep * v) - (point.offsetHeight / 2)) + 'px';
}

export default {
    pointDrag,
    setPointPos,
    setPointPosBySv
}