/* eslint-disable no-unused-vars */


function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var halfScreenHeight = window.innerHeight / 2;
var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
};
function setObservable(_a) {
    var _b;
    var obs = _a.obs, observableList = _a.observableList, callbacks = _a.callbacks;
    var obsId = (_b = obs === null || obs === void 0 ? void 0 : obs.target) === null || _b === void 0 ? void 0 : _b.id;
    if (!observableList.has(obsId)) {
        observableList.set(obsId, {
            observable: obs,
            isPassed: false,
            callbackFn: callbacks[obsId] || null,
        });
    }
}
function removeObservable(_a) {
    var _b;
    var obs = _a.obs, observableList = _a.observableList;
    var obsName = (_b = obs === null || obs === void 0 ? void 0 : obs.target) === null || _b === void 0 ? void 0 : _b.id;
    if (observableList.has(obsName)) {
        observableList.set(obsName, __assign(__assign({}, observableList.get(obsName)), { isPassed: true }));
    }
}
function colorize(observableList, initialColor, fillColor) {
    observableList.forEach(function (observable) {
        var rect = observable.observable.target.getBoundingClientRect();
        var entry = observable === null || observable === void 0 ? void 0 : observable.observable;
        var depthPx = rect.bottom - halfScreenHeight;
        var depthPercent = (depthPx * 100) / rect.height;

        if (!observable.isPassed) {
            if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
                if (initialColor && fillColor) {
                    entry.target.style.background = "linear-gradient(to top, " + initialColor + " " + depthPercent + "%, " + fillColor + " " + depthPercent + "% 100%)";
                }
            }

            if (rect.bottom < halfScreenHeight) {
                if (initialColor && fillColor) {
                    entry.target.style.background = fillColor;
                    entry.target.style.transform = "unset";
                }
                if (observable === null || observable === void 0 ? void 0 : observable.callbackFn) {
                    observable === null || observable === void 0 ? void 0 : observable.callbackFn();
                }
                // removeObservable({
                //     obs: entry,
                //     observableList: observableList,
                // });
            }
        }
    });
}
var TimelineObserver = function (_a) {
    var handleObserve = _a.handleObserve, initialColor = _a.initialColor, fillColor = _a.fillColor;
    var observablesStore = React.useRef(new Map());
    var callbacks = React.useRef({});
    var callback = function (entries) {
        entries === null || entries === void 0 ? void 0 : entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setObservable({
                    obs: entry,
                    observableList: observablesStore.current,
                    callbacks: callbacks.current,
                });
            }
        });
    };
    var observer = React.useRef(new IntersectionObserver(callback, options));
    var animation = function () {
        window.requestAnimationFrame(function () {
            colorize(observablesStore.current, initialColor, fillColor);
        });
    };
    React.useEffect(function () {
        document.addEventListener("scroll", animation);
        return function () {
            document.removeEventListener("scroll", animation);
        };
    });
    var setObserver = function (elem, callbackFn) {
        var elemId = elem === null || elem === void 0 ? void 0 : elem.id;
        if (initialColor) {
            elem.style.background = initialColor;
        }
        observer.current.observe(elem);
        if (elemId && callbackFn) {
            callbacks.current[elemId] = callbackFn;
        }
    };
    return React__default['default'].createElement("div", null, handleObserve ? handleObserve(setObserver) : null);
};

exports['default'] = TimelineObserver;
//# sourceMappingURL=index.js.map
