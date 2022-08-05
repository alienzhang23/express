// 字符串的下划线格式转驼峰格式
function underline2Hump(s) {
    return s.replace(/_(\w)/g, function(all, letter) {
        return letter.toUpperCase()
    })
}
// JSON对象的key值转换为驼峰式
function jsonToHump(obj) {
    if (obj instanceof Array) {
        obj.forEach(function(v, i) {
            jsonToHump(v)
        })
    } else if (obj instanceof Object) {
        Object.keys(obj).forEach(function(key) {
            var newKey = underline2Hump(key)
            if (newKey !== key) {
                obj[newKey] = obj[key]
                delete obj[key]
            }
            jsonToHump(obj[newKey])
        })
    }
    return obj
}

module.exports = jsonToHump;