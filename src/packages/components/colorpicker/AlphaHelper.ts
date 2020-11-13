import gsap from "gsap"
function sliderDrag(slider: HTMLElement, panel: HTMLElement, callback: Function) {
    slider.onmousedown = (e: MouseEvent) => {
        e.stopPropagation();
        let elLeft = slider.offsetLeft;
        let x = e.clientX;
        let y = e.clientY;
        let colorBarRound = getComputedStyle(panel);
        let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
        document.onmousemove = (move: MouseEvent) => {
            let left = elLeft - (x - move.clientX);
            if (
                left <= w &&
                left >= 0
            ) {
                slider.style.left = left + "px";
                let value = (parseInt(slider.style.left) / w) * 100;
                callback(Math.floor(value) / 100)
            }
            else {
                if (left <= 0) {
                    slider.style.left = 0 + 'px'
                } else {
                    slider.style.left = w + 'px'
                }
            }

            //转换成颜色
            if (window.getSelection()) {
                window.getSelection()?.removeAllRanges();
            }

        };
        document.onmouseup = (up: MouseEvent) => {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        // callback(0)
    }
}

function setSliderPos(slider: HTMLElement, colorBar: HTMLElement, left: number, callback: Function) {
    let colorBarRound = getComputedStyle(colorBar);
    let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
    let L = (left) + 'px'
    slider.style.left = L;
    let value = (parseInt(slider.style.left) / w) * 100;
    callback(Math.floor(value) / 100)
}

function setSliderPosByValue(slider: HTMLElement, colorBar: HTMLElement, value: number) {
    let colorBarRound = getComputedStyle(colorBar);
    let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
    let L = (w / 100) * (value * 100) + 'px'
    slider.style.left = L;
}

export default {
    sliderDrag,
    setSliderPos,
    setSliderPosByValue
}