var utilK = window.utilK||{};
utilK.utilDate = utilK.utilDate||{};

/**
 * 判断某年是否为闰年
 * @param y
 * @returns {boolean}
 */
utilK.utilDate.isLeap = function(y) {
    return (y % 100 !== 0 && y % 4 === 0) || (y % 400 === 0);
};
/**
 * 获取某月天数
 * @param y year年
 * @param m month月
 * @returns {number}
 */
utilK.utilDate.getDaysNum = function(y, m){
    var num = 31;

    switch (m) {
        case 2:
            num = utilDate.isLeap(y) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            num = 30;
            break;
    }
    return num;
};

/**
 * 格式化日期
 * @param date 要格式化的日期 :Date类型
 * @param exp 格式 'yyyy/mm/dd 或 yyyy-mm-dd'
 * @returns {string|XML}
 */
utilK.utilDate.format = function(date,exp) {
    var y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate();

    return exp.replace('yyyy', y).replace('mm', m).replace('dd', d);
};

/**
 * 返回ISO格式的日期字符串（去掉时分秒）
 * "2016-09-22T08:37:43.438Z" --> "2016-09-22"
 * @param date
 * @returns {string}
 */
utilK.utilDate.toIsoDateString = function(date) {
    return date.toISOString().slice(0,-14);
};

/**
 * 将指定的毫秒数加到给定日期的值上
 * @param date
 * @param ms
 * @returns {Date}
 */
utilK.utilDate.addMilliseconds = function (date, ms) {
    var millisecond = date.getMilliseconds();
    date.setMilliseconds(millisecond + ms);
    return date;
};

/**
 * 将指定的秒数加到此实例的值上
 * @param date
 * @param value
 * @returns {Date}
 */
utilK.utilDate.addSeconds = function (date, value) {
    var second = date.getSeconds();
    date.setSeconds(second + value);
    return date;
};

/**
 * 将指定的分钟数加到此实例的值上
 * @param date
 * @param value
 * @returns {Date}
 */
utilK.utilDate.addMinutes = function (date, value) {
    var minute = date.addMinutes();
    date.setMinutes(minute + value);
    return date;
};

/**
 * 将指定的小时数加到此实例的值上
 * @param date
 * @param value
 * @returns {*}
 */
utilK.utilDate.addHours = function (date, value) {
    var hour = date.getHours();
    date.setHours(hour + value);
    return date;
};

/**
 * 返回一个加上days天的新Date
 * @param date
 * @param days
 * @returns {Date}
 */
utilK.utilDate.plusDays = function(date, days) {
    return new Date(date.getTime() + days*60*60*24*1000);
};

/**
 * 返回一个减去days天的新Date
 * @param date
 * @param days
 * @returns {Date}
 */
utilK.utilDate.minusDays = function(date, days) {
    return new Date(date.getTime() - days*60*60*24*1000);
};

/**
 * 将指定的星期数加到此实例的值上
 * @param date
 * @param value
 * @returns {Date}
 */
utilK.utilDate.addWeeks = function (date, value) {
    return utilK.utilDate.plusDays(date, value * 7);
};

/**
 * 返回一个加上若干个月的新Date
 * @param date
 * @param num
 * @returns {Date}
 */
utilK.utilDate.plusMonths = function(date, num) {
    var newDate = new Date(date);
    newDate.setMonth(date.getMonth() + num); //setMonth()会自动除以12
    //注意：此时，月数可能会自动进位，比如：1-31加上num=1的情况，会变成3-3（非闰年）或3-2（闰年），即2-31自动转换为下个月的某一天。

    var currentMonth = date.getMonth() + date.getFullYear() * 12; //获得月的绝对值
    var diff = (newDate.getMonth() + newDate.getFullYear() * 12) - currentMonth; //计算新旧两个月绝对值的差

    if (diff != num) { //如果月绝对值的差和加上的月数不一样，说明月进位了，此时需要退一个月
        //setDate(0)表示变成上个月的最后一天
        newDate.setDate(0);
    }

    return newDate;
};

/**
 * 将指定的年份数加到此实例的值上
 * @param date
 * @param value
 * @returns {*}
 */
utilK.utilDate.addYears = function (date, value) {
    var year = date.getFullYear();
    date.setFullYear(year + value);
    return date;
};

/**
 * 返回下个月的第一天的Date对象
 * @param date
 * @returns {Date}
 */
utilK.utilDate.getStartOfNextMonth = function(date){
    var newDate = new Date(date);
    newDate.setDate(15); //确保月数不会进位
    newDate.setMonth(date.getMonth()+1);
    newDate.setDate(1);
    return newDate;
};

/**
 * 返回下个月的最后一天的Date对象
 * @returns {Date}
 */
utilK.utilDate.getEndOfNextMonth = function(date){
    var newDate = new Date(date);
    newDate.setDate(15); //确保月数不会进位
    newDate.setMonth(date.getMonth() + 2); //加两个月
    newDate.setDate(0); //再退回上个月的最后一天
    return newDate;
};

