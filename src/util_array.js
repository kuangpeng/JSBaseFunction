var utilK = window.utilK||{};
utilK.utilArray = utilK.utilArray||{};

/**
 * 清空数组
 * @param arr
 * @returns {*}
 */
utilK.utilArray.clear = function(arr){
    if (arr.length > 0) {
        arr.splice(0, arr.length);
    }
    return arr;
};

/**
 * 判断数组是否为空
 * @param arr
 * @returns {boolean}
 */
utilK.utilArray.isEmpty = function(arr){
    if (arr.length == 0)
        return true;
    else
        return false;
};

/**
 * 克隆数组
 * @param arr
 * @returns {Array}
 */
utilK.utilArray.clone = function(arr){
    var clonedArray = [];
    var length = arr.length;

    for (var index = 0; index < length; index++) {
        clonedArray[index] = arr[index];
    }

    return clonedArray;
};

/**
 * 在指定位置插入新数据
 * @param arr
 * @param index
 * @param item
 * @returns {*}
 */
utilK.utilArray.insert = function(arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
};

/**
 * 移除某一项
 * @param arr
 * @param item
 * @returns {*}
 */
utilK.utilArray.remove = function(arr, item) {
    var index = arr.indexOf(item);

    if (index >= 0) {
        arr.splice(index, 1);
    }

    return arr;
};

/**
 * 移除指定位置数据
 * @param arr
 * @param index
 * @returns {*}
 */
utilK.utilArray.removeAt = function(arr, index) {
    arr.splice(index, 1);
    return arr;
};

/**
 * 循环数组中的每个元素 调用each方法时，要提供这个接口的一个实现函数
 * @param arr
 * @param fun
 */
utilK.utilArray.each = function(arr, fun) {
    for( var i=0,n=arr.length;i<n;i++){
        fun( i, arr[i]);
    }
};

/**
 * Array类的map函数
 * @param arr
 * @param fun
 * @returns {Array}
 */
utilK.utilArray.map = function(arr, fun){
    var o=[];
    utilK.utilArray.each(arr, function( k,v){
        o[k] = fun(k, v);
    });
    return o;
};

/**
 * 数组去重
 * @param arr
 * @returns {*[]}
 */
utilK.utilArray.unique = function(arr){
    arr.sort();
    var re=[arr[0]];
    for(var i = 1; i < arr.length; i++){
        if( arr[i] !== re[re.length-1]){
            re.push(arr[i]);
        }
    }
    return re;
};