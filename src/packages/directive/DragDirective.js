"use strict";
exports.__esModule = true;
exports["default"] = {
    Install: function (Vue) {
        Vue.directive('drag', {
            mounted: function (el, bind) {
                el.onmousedown = function (e) {
                    var elLeft = el.offsetLeft;
                    var elTop = el.offsetTop;
                    var dom = e.target;
                    if (dom.classList.contains('drag-target')) {
                        var x_1 = e.clientX;
                        var y_1 = e.clientY;
                        document.onmousemove = function (move) {
                            var _a;
                            var bodyW = document.body.clientWidth;
                            var bodyH = document.body.clientHeight;
                            var left = elLeft - (x_1 - move.clientX);
                            if (left < 0) {
                                left = 0;
                            }
                            if (left > bodyW - el.offsetWidth) {
                                left = bodyW - el.offsetWidth;
                            }
                            el.style.left = left + 'px';
                            var top = elTop - (y_1 - move.clientY);
                            if (top < 0) {
                                top = 0;
                            }
                            if (top > bodyH - el.offsetHeight) {
                                top = bodyH - el.offsetHeight;
                            }
                            el.style.top = top + 'px';
                            document.onmouseup = function (up) {
                                document.onmousemove = null;
                                document.onmouseup = null;
                            };
                            if (window.getSelection()) {
                                (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
                            }
                        };
                    }
                };
            },
            unmounted: function (el, bind) {
                el.onmousedown = null;
            }
        });
    }
};
