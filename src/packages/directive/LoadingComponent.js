"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createLoadingComponent = void 0;
var vue_1 = require("vue");
var Icon_vue_1 = require("../components/icon/Icon.vue");
var FadeAnim_vue_1 = require("../components/anim/FadeAnim.vue");
function createLoadingComponent(option) {
    var vm;
    var data = vue_1.reactive(__assign({}, option));
    var setText = function (v) {
        data.text = v;
    };
    var setVisible = function (status) {
        data.visible = status;
    };
    var destory = function () {
        var _a;
        var element = vm.el;
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    };
    vm = vue_1.createVNode({
        setup: function () {
            return loadingComponentInfo;
        },
        render: function () {
            var _this = this;
            var mask = vue_1.h('div', {
                "class": 'f-v-loading'
            }, [
                vue_1.h(Icon_vue_1["default"], {
                    icon: 'loader'
                }),
                vue_1.h("span", this.text),
            ]);
            return vue_1.h(FadeAnim_vue_1["default"], {}, {
                "default": function () {
                    if (_this.visible) {
                        return mask;
                    }
                    return vue_1.h('span');
                }
            });
        }
    });
    var loadingComponentInfo = __assign(__assign({}, vue_1.toRefs(data)), { setText: setText,
        setVisible: setVisible,
        vm: vm,
        destory: destory });
    return loadingComponentInfo;
}
exports.createLoadingComponent = createLoadingComponent;
