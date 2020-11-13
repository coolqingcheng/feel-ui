import gsap from "gsap"
function sliderDrag(slider: HTMLElement, colorBar: HTMLElement, callback: Function) {
    slider.onmousedown = (e: MouseEvent) => {
        e.stopPropagation();
        let elLeft = slider.offsetLeft;
        let elTop = slider.offsetTop;
        let dom = <HTMLElement>e.target;
        let x = e.clientX;
        let y = e.clientY;
        let colorBarRound = getComputedStyle(colorBar);
        let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
        document.onmousemove = (move: MouseEvent) => {
            let left = elLeft - (x - move.clientX);
            if (
                left <= w &&
                left >= 0
            ) {
                slider.style.left = left + "px";
                let value = (parseInt(slider.style.left) / w) * 100;
                let colorStep = 360 / 100;
                callback(Math.round(value * colorStep))
            }
            else {
                if (left <= 0) {
                    slider.style.left = 0 + 'px'
                } else {
                    slider.style.left = w + 'px'
                }
                // console.log('不操作:' + left)
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
    console.log('left:' + left);

    let colorBarRound = getComputedStyle(colorBar);
    let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
    let L = (left) + 'px'
    // gsap.to(slider, {
    //     left: L,
    //     onComplete: () => {
    //         let value = (parseInt(slider.style.left) / w) * 100;
    //         let colorStep = 360 / 100;
    //         callback(Math.round(value * colorStep))
    //     }
    // })
    slider.style.left = L
    let value = (parseInt(slider.style.left) / w) * 100;
    let colorStep = 360 / 100;
    callback(Math.round(value * colorStep))

}


function setSliderPosByH(slider: HTMLElement, colorBar: HTMLElement, h: number) {

    let colorBarRound = getComputedStyle(colorBar);
    let w = parseInt(colorBarRound.width) - (parseInt(colorBarRound.paddingLeft) + parseInt(colorBarRound.paddingRight));
    let step = w / 360;
    let L = (step * h) + 'px'
    slider.style.left = L
}

export default {
    sliderDrag,
    setSliderPos,
    setSliderPosByH
}