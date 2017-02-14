/*
* 我们经常会在进行下一步操作前进行输入校验，以确保是一个可靠值，或确保表单数据是有效的，等等。
* 但我们平时是怎么确保一个元素是否有资格进行进一步操作呢？如果一个元素有给定匹配的选择器，那么你可以使用 matchesSelector 函数来校验：
*/

'use strict';
function matchesSelector(el, selector) {
    var p = Element.prototype;
    var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(el, selector);
}

/*
// 用法
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]');
*/
