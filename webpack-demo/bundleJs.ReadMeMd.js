/***
 * 整体是一个立即执行函数
 * ***/
(() => { // webpackBootstrap
    /******/
    "use strict";
    /***
     * 本身是一个数组
     * 存放所有模块
     * 每个数组元素都是参数列表相同的函数
     * 每个元素都是对应源代码的每个模块
     * ***/
    var __webpack_modules__ = ([
        /* 0 */
        ,
        /* 1 */
        /***/
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (() => {
                const element = document.createElement('h2')
                element.textContent = 'Helle Webpack'
                element.addEventListener('click', () => {
                    alert('SB,您好呀')
                })
                return element
            });

            /***/
        }),
        /* 2 */
        /***/
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (() => {
                const div = document.createElement('div')
                div.textContent = '我在底部'
                div.addEventListener('click', () => {
                    alert('SB,我在底部')
                })
                return div
            });

            /***/
        })
        /******/
    ]);
    /************************************************************************/
    /******/ // The module cache 定义一个对象，缓存加载过的模块
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /***
     * 用于加载指定模块的函数
     * ***/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    // 该条目需要包装在IIFE中，因为它需要与块中的其他模块隔离。
    // 开始加载源代码中的入口模块
    (() => {
        __webpack_require__.r(__webpack_exports__);
        // 1，2就是__webpack_modules__数组下标
        /* harmony import */
        var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */
        var _bottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);




        const head = (0, _heading__WEBPACK_IMPORTED_MODULE_0__.default)()
        document.body.append(head)

        const bottom = (0, _bottom__WEBPACK_IMPORTED_MODULE_1__.default)()
        document.body.append(bottom)

    })();

    /******/
})();