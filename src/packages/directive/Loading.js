"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var LoadingComponent_1 = require("./LoadingComponent");
exports["default"] = {
    install: function (vue) {
        vue.directive('loading', {
            mounted: function (el, bind) {
                console.log(el.tagName);
                if (el.tagName !== 'DIV')
                    return;
                el.style.position = "relative";
                var text = el.getAttribute("loading-text");
                if (!text) {
                    text = "loading...";
                }
                console.log(bind.value);
                var loadingComponentInstance = LoadingComponent_1.createLoadingComponent({
                    text: text,
                    visible: bind.value
                });
                vue_1.render(loadingComponentInstance.vm, document.createElement('div'));
                el.appendChild(loadingComponentInstance.vm.el);
                el['instance'] = loadingComponentInstance;
            },
            updated: function (el, bind) {
                if (el.tagName !== 'DIV')
                    return;
                var text = el.getAttribute("loading-text");
                if (!text) {
                    text = "loading...";
                }
                if (el['instance']) {
                    var instance = el['instance'];
                    instance === null || instance === void 0 ? void 0 : instance.setText(text);
                    instance === null || instance === void 0 ? void 0 : instance.setVisible(bind.value);
                }
            },
            unmounted: function (el) {
                if (el['instance']) {
                    var instance = el['instance'];
                    instance.destory();
                }
            }
        });
    }
};
