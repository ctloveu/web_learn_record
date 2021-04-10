(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    ; // CONCATENATED MODULE: ./src/heading.js
    /* harmony default export */
    const heading = (() => {
        const element = document.createElement('h2')
        element.textContent = 'Helle Webpack'
        element.addEventListener('click', () => {
            alert('SB,您好呀')
        })
        return element
    });; // CONCATENATED MODULE: ./src/bottom.js
    const testTreeShake = () => {
        console.log(555)
    }

    /* harmony default export */
    const bottom = (() => {
        const div = document.createElement('div')
        div.textContent = '我在底部'
        div.addEventListener('click', () => {
            alert('SB,我在底部')
        })
        return div
    });; // CONCATENATED MODULE: ./src/index.js



    // import './assets/css/main.css'

    // import about from './about.md'
    // console.log(about)

    const head = heading()
    document.body.append(head)

    const src_bottom = bottom()
    // document.body.append(bottom)

})();