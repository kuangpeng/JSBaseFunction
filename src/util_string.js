var utilK = window.utilK||{};
utilK.utilString = utilK.utilString||{};

/**
 * 判断字符串是否为Null或者为空字符串
 */
utilK.utilString.isNullOrEmpty = function(str) {
    return str === undefined || str === null || str == "";
};

/**
 * 判断字符串是否为Null或者为空字符串或者全是空格
 * 为 空 或者全部是空格 则返回 true，否则返回false
 */
utilK.utilString.isNullOrWhiteSpace = function(str) {
    return utilK.utilString.isNullOrEmpty(str) || str.trim().isNullOrEmpty();
};

/**
 * 字符串中 参数 替换
 * @param strings 'my name is {name}'
 * @param data  ｛name:'kuangpeng'｝
 * @returns {string} string->'my name is kuangpeng'
 */
utilK.utilString.paramCompile = function(strings, data){
    return strings.replace(/\{\w+\}/g, function(str) {
        var prop = str.replace(/\{|\}/g, '');
        return data[prop] || '';
    });
};

/**
 * 获取N个相同的字符串
 * @param str
 * @param num N
 * @returns {string}
 */
utilK.utilString.repeat = function(str,num){
    var tmpArr = [];
    for ( var i = 0; i < num; i++)
        tmpArr.push(str);
    return tmpArr.join("");
};

/**
 * //测试是否是数字
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isNumeric = function(str){
    var tmpFloat = parseFloat(str);
    if (isNaN(tmpFloat))
        return false;
    var tmpLen = str.length - tmpFloat.toString().length;
    return tmpFloat + utilK.utilString.repeat('0', tmpLen) == str;
};

/**
 * 测试是否是整数
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isInt = function(str){
    if (this == "NaN")
        return false;
    return str == parseInt(str).toString();
};

/**
 * 合并多个空白为一个空白
 * @returns {string}
 */
utilK.utilString.resetBlank = function(str){
    return str.replace(/s+/g, " ");
};

/**
 * 得到字节长度
 * @returns {Number}
 */
utilK.utilString.getRealLength = function(str){
    return str.replace(/[^x00-xff]/g, "--").length;
};

/**
 * Unicode转化
 * @returns {string}
 */
utilK.utilString.ascW = function(str){
    var strText = "";
    for ( var i = 0; i < str.length; i++)
        strText += "&#" + str.charCodeAt(i) + ";";
    return strText;
};

/**
 * 判断字符串是否是电话/传真号码
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isTelOrFax = function(str){
    return utilK.utilString.isNullOrEmpty(str) ? false : /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(str);
};

/**
 * 判断字符串是否是手机号码
 * @returns {boolean}
 */
utilK.utilString.isMobile = function(str){
     return utilK.utilString.isNullOrEmpty(str) ? false : /^(13|14|15|17|18)\d{9}$/i.test(str);
};

/**
 * 判断字符串是否是电子邮箱
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isEmail = function(str){
     return utilK.utilString.isNullOrEmpty(str) ? false : /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(str);
};

/**
 * 判断字符串是否是邮编
 * @returns {boolean}
 */
utilK.utilString.isZip = function(str){
   return utilK.utilString.isNullOrEmpty(str) ? false : /^[\d]{6}$/.test(str);
};

utilK.utilString.isQQ = function(str){
     return utilK.utilString.isNullOrEmpty(str) ? false : /^[1-9]\d{5,11}$/i.test(str);
};

/**
 * 判断字符串是否存在汉字
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isExistChinese = function(str){
    return utilK.utilString.isNullOrEmpty(str) ? false : !/^[\x00-\xff]*$/.test(str);
};

/**
 * 判断字符串是否全是汉字
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isChinese = function(str){
    return utilK.utilString.isNullOrEmpty(str) ? false : /^[\u0391-\uFFE5]+$/i.test(str);
};

/**
 * 判断字符串是否全是字母
 * @param str
 * @returns {boolean}
 */
utilK.utilString.isAbc = function(str){
    return utilK.utilString.isNullOrEmpty(str) ? false : /^[A-Za-z]+$/i.test(str);
};

/**
 * 将字符串日期转换成日期类型
 * @param str
 * @returns {*}
 */
utilK.utilString.toDate = function(str){
    try { return new Date(str.replace(/-/g, "\/")); }
    catch (e) { return null; }
};

/**
 * 将字符串转换成对应的bool值
 * @param str
 * @returns {boolean}
 */
utilK.utilString.toBool = function (str) {
    var str1 = utilK.utilString.isNullOrEmpty(str) ? false : str.toLowerCase();
    str1 = str1.trim();
    return str1 == "true" || str1 == "yes" || str1 == "y" || str1 == "t" || str1 == "1" || str1 == "是";
};

/**
 * 将字符串转换成对应的int
 * @param str
 * @returns {*}
 */
utilK.utilString.toInt = function (str) {
    return isNaN(parseInt(str)) ? 0 : parseInt(str);
};

/**
 * 将字符串转换成对应的Double
 * @param str
 * @returns {*}
 */
utilK.utilString.toDouble = function (str) {
    return isNaN(parseFloat(str)) ? 0.0 : parseFloat(str);
};

/**
 * 将字符串转换成对应的Json
 * @param str
 * @returns {*}
 */
utilK.utilString.toJson = function (str) {
    try{return JSON.parse(str);}
    catch (e) { return null; }
};