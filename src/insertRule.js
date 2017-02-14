/*
* 为选择器设置样式
*/

'use strict';
var sheet = (function() {
        // 创建 <style> 标签
    var style = document.createElement('style');

        // 如果你需要指定媒介类型，则可以在此添加一个 media (和/或 media query)
    // style.setAttribute('media', 'screen')
    // style.setAttribute('media', 'only screen and (max-width : 1024px)')

    // WebKit hack :(
    style.appendChild(document.createTextNode(''));

        // 将 <style> 元素添加到页面
    document.head.appendChild(style);

    return style.sheet;
})();

/*
// 用法 insertRule
sheet.insertRule("body { background:red; }");
*/