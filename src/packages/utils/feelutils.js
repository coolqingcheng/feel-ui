"use strict";
exports.__esModule = true;
exports.deepClone = exports.guid = exports.genRandCode = exports.clone = void 0;
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepClone = deepClone;
function clone() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objs.forEach(function (obj) {
        if (obj) {
            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                if (isPlainObject(val)) {
                    // 递归
                    if (isPlainObject(result[key])) {
                        result[key] = clone(result[key], val);
                    }
                    else {
                        result[key] = clone(val);
                    }
                }
                else {
                    result[key] = val;
                }
            });
        }
    });
    return result;
}
exports.clone = clone;
function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
function genRandCode() {
    return Math.random().toString(36).substr(-8);
}
exports.genRandCode = genRandCode;
function guid() {
    return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
}
exports.guid = guid;
