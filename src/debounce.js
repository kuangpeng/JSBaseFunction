/*
 * 对于高耗能事件，debounce 函数是一种不错解决方案。如果你不对 scroll、resize、和 key* 事件使用 debounce  函数，那么你几乎等同于犯了错误
 * debounce 函数不允许回调函数在指定时间内执行多于一次。当为一个会频繁触发的事件分配一个回调函数时，该函数显得尤为重要。
 */

'use strict';
// 返回一个函数，如果它被不间断地调用，它将不会得到执行。该函数在停止调用 N 毫秒后，再次调用它才会得到执行。如果有传递 ‘immediate’ 参数，会马上将函数安排到执行队列中，而不会延迟。
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/*
// 用法
var myEfficientFn = debounce(function() {
        // 所有繁重的操作
}, 250);
window.addEventListener('resize', myEfficientFn);
*/