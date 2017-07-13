/**
 * 简单的前端模版函数
 * 支持简单的 if、for、switch 控制流程
 * 使用<%%>作为模版标识符
 * @param tpl 模版字符串
 * @param data 数据对象
 * @returns {*} 返回编译过的html字符串
 * @constructor
 */
function TemplateEngine(tpl, data) {
    var re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'var r=[];\n',
        cursor = 0,
        match;

    var add = function(line, js){
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') : (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    };

    while(match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }

    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}