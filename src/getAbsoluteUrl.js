/*
* 从一个字符串变量得到一个绝对 URL，并不是你想象中这么简单。
* 对于某些 URL 构造器，如果你不提供必要的参数就会出问题（而有时候你真的不知道提供什么参数）。
* 下面有一个优雅的技巧，只需要你传递一个字符串就能得到相应的绝对 URL。
* @Date:   2017-02-14 10:00:28
* @Last Modified by:   Win7
* @Last Modified time: 2017-02-14 10:05:38
*/

'use strict';
var getAbsoluteUrl = (function() {
    var a;

    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;

        return a.href;
    };
})();

/*
// 用法
getAbsoluteUrl('/something'); // http://davidwalsh.name/something
*/