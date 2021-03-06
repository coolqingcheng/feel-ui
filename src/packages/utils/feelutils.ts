
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}


function clone(...objs: any[]) {
    const result = Object.create(null)
    objs.forEach(obj => {
        if (obj) {
            Object.keys(obj).forEach(key => {
                const val = obj[key]
                if (isPlainObject(val)) {
                    // 递归
                    if (isPlainObject(result[key])) {
                        result[key] = clone(result[key], val)
                    } else {
                        result[key] = clone(val)
                    }
                } else {
                    result[key] = val
                }
            })
        }
    })
    return result

}

function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}
function genRandCode() {
    var array = new Uint32Array(1);
    var cryptoObj = window.crypto || window['msCrypto']; // for IE 11
    return cryptoObj.getRandomValues(array)[0];
}


function guid() {
    return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
}


export {
    clone,
    genRandCode,
    guid,
    deepClone
}