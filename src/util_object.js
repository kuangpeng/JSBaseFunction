/**
 * 对象工具方法
 * @type {{}}
 */
var utilK = window.utilK||{};
utilK.utilObject = utilK.utilObject||{};

utilK.utilObject.isArray = function(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
};

utilK.utilObject.isBoolean = function(obj){
    return Object.prototype.toString.call(obj) === '[object Boolean]';
};

utilK.utilObject.isDate = function(obj){
    return Object.prototype.toString.call(obj) === '[object Date]';
};

utilK.utilObject.isNumber = function(obj){
    return Object.prototype.toString.call(obj) === '[object Number]';
};

utilK.utilObject.isString = function(obj){
    return Object.prototype.toString.call(obj) === '[object String]';
};

utilK.utilObject.isRegExp = function(obj){
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

utilK.utilObject.isEmpty = function(obj) {
    return (Array.isArray(obj) && obj.length === 0) || (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0);
};